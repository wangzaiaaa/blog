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
  if (!fs.existsSync(postsDirectory)) {
    console.error(`Directory not found: ${postsDirectory}`);
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => ({
    id: fileName.replace(/\.md$/, '')
  }))
}

export function getBlogPost(id: string): BlogPost | null {
  const decodedId = decodeURIComponent(id)
  const fileNames = fs.readdirSync(postsDirectory)
  const fileName = fileNames.find(name => name.replace(/\.md$/, '') === decodedId)

  if (!fileName) {
    console.error(`File not found for id: ${id}`)
    return null
  }

  const fullPath = path.join(postsDirectory, fileName)
  
  try {
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
    console.error(`Error reading file ${fileName}:`, error)
    return null
  }
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    console.error(`Directory not found: ${postsDirectory}`);
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    const id = encodeURIComponent(fileName.replace(/\.md$/, ''))
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      id,
      title: data.title || 'Untitled',
      author: data.author || '碳水怪兽👾',
      date: data.date || new Date().toISOString(),
      image: data.image || "/placeholder.jpg",
      content,
    }
  })
}

