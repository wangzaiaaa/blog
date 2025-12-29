import { getPortfolioBySlug, portfolioItems } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    id: item.slug,
  }));
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getPortfolioBySlug(id);

  if (!item) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
        <div className="flex items-center text-gray-600 mb-8">
          <span className="mr-4">作者: {item.author}</span>
          <span>发布日期: {new Date(item.date).toLocaleDateString()}</span>
        </div>
        
        {item.image && (
          <div className="mb-8 relative w-full h-[400px]">
            <Image 
              src={item.image} 
              alt={item.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        <div className="prose dark:prose-invert max-w-none">
          {item.description && (
            <p className="text-xl mb-6 font-medium">{item.description}</p>
          )}
          {item.content && (
            <div className="whitespace-pre-wrap">{item.content}</div>
          )}
        </div>
      </div>
    </div>
  );
}
