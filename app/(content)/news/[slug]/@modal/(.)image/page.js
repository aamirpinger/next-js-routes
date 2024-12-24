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
      <h2>Intercepted!</h2>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
