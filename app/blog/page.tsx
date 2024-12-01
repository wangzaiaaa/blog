import Card from "../components/Card";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      author: "You",
      date: "2023-05-01",
      image: "/place.jpg",
      link: "/home",
    },
    {
      id: 2,
      title: "Blog Post 2",
      author: "You",
      date: "2023-05-15",
      image: "/place.jpg",
      link: "/home",
    },
    {
      id: 3,
      title: "Blog Post 3",
      author: "You",
      date: "2023-05-30",
      image: "/place.jpg",
      link: "/home",
    },
    {
      id: 4,
      title: "Blog Post 4",
      author: "You",
      date: "2023-05-31",
      image: "/place.jpg",
      link: "/home",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default Blog;
