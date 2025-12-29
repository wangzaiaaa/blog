import Card from "../components/Card";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Project 1",
      author: "You",
      date: "2023-01-01",
      image: "/place.jpg",
      link: "/home",
    },
    {
      id: 2,
      title: "Project 2",
      author: "You",
      date: "2023-02-15",
      image: "/place.jpg",
      link: "/home",
    },
    {
      id: 3,
      title: "Project 3",
      author: "You",
      date: "2023-03-30",
      image: "/place.jpg",
      link: "/home",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">作品集</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            author={item.author}
            date={item.date}
            link={`/portfolio/${item.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
