import Card from "./components/Card";

const Home = () => {
  const recentBlogs = [
    {
      id: 1,
      title: "Blog Post 1",
      author: "You",
      date: "2023-05-01",
      image: "/place.jpg",
    },
    {
      id: 2,
      title: "Blog Post 2",
      author: "You",
      date: "2023-05-15",
      image: "/place.jpg",
    },
    {
      id: 3,
      title: "Blog Post 3",
      author: "You",
      date: "2023-05-30",
      image: "/place.jpg",
    },
  ];

  return (
    <div>
      {/* <h1 className="text-3xl font-bold mb-6">
        Welcome to My Personal Website
      </h1>
      <h2 className="text-2xl font-semibold mb-4">Recent Blog Posts</h2> */}
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
