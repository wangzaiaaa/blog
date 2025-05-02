// 移除 'use client'
import { getBlogPost, getAllPostIds } from '@/lib/posts'
import BlogPostClient from '@/app/components/BlogPostClient' // 导入新的客户端组件
import { notFound } from 'next/navigation'; // 用于处理未找到文章的情况

// generateStaticParams 保持不变，它在构建时运行
export async function generateStaticParams() {
  const posts = getAllPostIds()
  // 确保返回正确的格式 { id: string }[]
  return posts.map(post => ({ id: post.id }))
}

// 这个页面是服务器组件，在构建时为每个静态路径执行
export default function BlogPostPage({ params }: { params: { id: string } }) {
  // 直接在服务器组件（构建时）获取数据
  const post = getBlogPost(params.id)

  // 如果文章未找到，构建时会出错或生成一个表示未找到的页面
  // 使用 notFound() 是更标准的处理方式
  if (!post) {
    notFound();
  }

  // 将获取到的数据传递给客户端组件进行渲染
  // BlogPostClient 只接收序列化的数据，不涉及 fs 模块
  return <BlogPostClient post={post} />
}

