import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Card from '../components/Card';

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
}

const getBlogPosts = (): BlogPost[] => {
  const postsDirectory = path.join(process.cwd(), '_posts');
  
  // Check if the directory exists
  if (!fs.existsSync(postsDirectory)) {
    console.error(`Directory not found: ${postsDirectory}`);
    return [];
  }

  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const id = encodeURIComponent(filename.replace(/\.md$/, ''));
    const filePath = path.join(postsDirectory, filename);

    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      return {
        id,
        title: data.title || 'Untitled',
        author: data.author || '碳水怪兽👾',
        date: data.date || new Date().toDateString(),
        image: data.image || '/book.jpg',
      };
    } catch (error) {
      console.error(`Error reading file ${filename}:`, error);
      return null;
    }
  }).filter((post): post is BlogPost => post !== null);
};

export const generateStaticParams = async () => {
  const blogPosts = getBlogPosts();
  return blogPosts.map((post) => ({
    id: post.id,
  }));
};

const BlogPage = () => {
  const blogPosts = getBlogPosts();

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

