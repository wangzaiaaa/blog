import { getAllBlogPosts, BlogPost } from '@/lib/posts'; // 确保导入 BlogPost 类型
import Card from '../components/Card';

// 这个页面是服务器组件，可以直接获取数据
const BlogPage = () => {
  const blogPosts: BlogPost[] = getAllBlogPosts();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">博客文章</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            image={post.image}
            title={post.title}
            author={post.author}
            date={post.date}
            link={`/blog/${post.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

