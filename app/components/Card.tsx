"use client";

import Link from "next/link";
import { Card as AntCard } from "antd";
import Image from "next/image";
import { useTheme } from "next-themes";

const { Meta } = AntCard;

interface CardProps {
  image: string;
  title: string;
  author: string;
  date: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ image, title, author, date, link }) => {
  const { theme } = useTheme();

  return (
    <Link href={link}>
      <AntCard
        hoverable
        cover={<Image src={image} alt={title} width={300} height={200} />}
        className={`w-full ${theme === "dark" ? "bg-gray-800 text-white" : ""}`}
      >
        <Meta
          title={
            <span className={theme === "dark" ? "text-white" : ""}>
              {title}
            </span>
          }
          description={
            <div className={theme === "dark" ? "text-gray-300" : ""}>
              <p>{author}</p>
              <p>{date}</p>
            </div>
          }
        />
      </AntCard>
    </Link>
  );
};

export default Card;
