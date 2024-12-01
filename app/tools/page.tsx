import Card from "../components/Card";

const Tools = () => {
  const tools = [
    {
      id: 1,
      title: "Tool 1",
      author: "You",
      date: "2023-04-01",
      image: "/place.jpg",
      link: "/home",
    },
    {
      id: 2,
      title: "Tool 2",
      author: "You",
      date: "2023-04-15",
      image: "/place.jpg",
      link: "/home",
    },
    {
      id: 3,
      title: "Tool 3",
      author: "You",
      date: "2023-04-30",
      image: "/place.jpg",
      link: "/home",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Card
            key={tool.id}
            image={tool.image}
            title={tool.title}
            author={tool.author}
            date={tool.date}
            link={`/tools/${tool.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Tools;
