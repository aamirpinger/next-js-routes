import { newsObjects } from '@/newObject';
import { notFound } from 'next/navigation';

export default async function InterceptedImagePage({ params }) {
  const {slug: newsItemSlug} = await params;
  const newsItem = newsObjects.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <> 
      <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </div>
    </>
  );
}
