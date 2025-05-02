import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), '_posts')

export interface BlogPost {
  id: string
  title: string
  author: string
  date: string
  image: string
  content: string
}

export function getAllPostIds() {
  // 在服务器组件或构建时执行
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => ({
      id: fileName.replace(/\.md$/, '')
    }))
  } catch (error) {
    console.error(`Error reading directory: ${postsDirectory}`, error)
    return []
  }
}

export function getBlogPost(id: string): BlogPost | null {
  // 在服务器组件或构建时执行
  try {
    const decodedId = decodeURIComponent(id)
    const fileNames = fs.readdirSync(postsDirectory)
    const fileName = fileNames.find(name => name.replace(/\.md$/, '') === decodedId)

    if (!fileName) {
      console.error(`File not found for id: ${id}`)
      return null
    }

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      id,
      title: data.title || 'Untitled',
      author: data.author || '碳水怪兽👾',
      date: data.date || new Date().toISOString(),
      image: data.image || "/book.jpg",
      content,
    }
  } catch (error) {
    console.error(`Error reading file for id ${id}:`, error)
    return null
  }
}

export function getAllBlogPosts(): BlogPost[] {
  // 在服务器组件或构建时执行
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const posts = fileNames.map(fileName => {
      const id = encodeURIComponent(fileName.replace(/\.md$/, ''))
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        id,
        title: data.title || 'Untitled',
        author: data.author || '碳水怪兽👾',
        date: data.date || new Date().toISOString(),
        image: data.image || "/placeholder.jpg", // 注意这里可能需要与 getBlogPost 保持一致
        content, // 确保 content 也被返回，如果 Card 组件需要的话
      }
    })

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error(`Error reading blog posts:`, error)
    return []
  }
}

