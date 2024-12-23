'use client';

import { notFound, useParams } from 'next/navigation';
import { newsObjects } from '../../../newObject';
import Image from 'next/image';

export default function NewDetails({ params }) {
  const { slug } = useParams();
  const newsDetail = newsObjects.find(news => news.slug === slug);

  if (!newsDetail) {
    return notFound();
  }

  return (
    <article className='news-article'>
      <header>
        <img src={`/images/news/${newsDetail.image}`} alt={newsDetail.title} />
        <h1>{newsDetail.title}</h1>
        <time dateTime={NewDetails.date}>{newsDetail.date}</time>
      </header>
      <p>{newsDetail.content}</p>
    </article>
  );
}
