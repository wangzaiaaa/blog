export interface PortfolioItem {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  link: string;
  slug: string;
  description?: string;
  content?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "番茄钟专注助手",
    author: "wang",
    date: "2025-12-01",
    image: "https://image.keepdev.fun/unnamed.jpg",
    link: "/portfolio/fanqieclick",
    slug: "fanqieclick",
    description: "一个帮助你保持专注的番茄钟工具。",
    content: "这是一个基于番茄工作法的专注助手，帮助你提高工作效率..."
  },
  {
    id: 2,
    title: "密码管理小助手",
    author: "从零开始独立开发",
    date: "2025-9-15",
    image: "https://image.keepdev.fun/passwordgenie/favicon.ico",
    link: "/portfolio/passwordgenie",
    slug: "passwordgenie",
    description: "一个帮助你管理密码的小助手。",
    content: "这是一个基于密码学的密码管理工具，帮助你生成、存储和管理密码..."
  },
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}
