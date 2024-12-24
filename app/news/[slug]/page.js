import { notFound} from 'next/navigation';
import { newsObjects } from '../../../newObject';
import Image from 'next/image';
import Link from 'next/link';

export default async function NewDetails({params}) {
  const { slug } = await params;
  const newsDetail = newsObjects.find(news => news.slug === slug);

  if (!newsDetail) {
    return notFound();
  }

  return (
    <article className='news-article'>
      <header>
        <Link href={`/news/${newsDetail.slug}/image`}>
          <img src={`/images/news/${newsDetail.image}`} alt={newsDetail.title} />
        </Link>
        <h1>{newsDetail.title}</h1>
        <time dateTime={NewDetails.date}>{newsDetail.date}</time>
      </header>
      <p>{newsDetail.content}</p>
    </article>
  );
}
