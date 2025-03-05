'use client'

import React from 'react'
import { getBlogPost, getAllPostIds, BlogPost } from '@/lib/posts'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'
import 'highlight.js/styles/github-dark.css'

export async function generateStaticParams() {
  const posts = getAllPostIds()
  return posts
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  if (!post) {
    return <div className="p-6 max-w-3xl mx-auto">Post not found</div>
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">
        作者：{post.author} 发布于：{new Date(post.date).toLocaleDateString('zh-CN')}
      </p>
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown
          rehypePlugins={[rehypeHighlight, rehypeRaw]}
          remarkPlugins={[remarkGfm]}
        >
          {post.content}
        </ReactMarkdown>
      </div>
      
    </div>
  )
}

