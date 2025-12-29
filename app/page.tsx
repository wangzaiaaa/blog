import Card from "./components/Card";
import { getAllBlogPosts } from "@/lib/posts";

const Home = () => {
  const recentBlogs = getAllBlogPosts();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentBlogs.map((blog) => (
          <Card
            key={blog.id}
            image={blog.image}
            title={blog.title}
            author={blog.author}
            date={blog.date}
            link={`/blog/${blog.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
