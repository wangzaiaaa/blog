import Card from "../components/Card";
import { portfolioItems } from "@/lib/data";

const Portfolio = () => {
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
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
