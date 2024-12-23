import Link from 'next/link';

export default function NewsList({newsList}) {
  if(!newsList.length){
    return <h5>Now news to show...</h5>
  }

  return (
    <ul className='news-list'>
      {newsList.map(news => (
        <li key={`${news.id}`}>
          <Link href={`/news/${news.slug}`}>
            <img src={`/images/news/${news.image}`} alt={news.title} />
            <span>{news.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
