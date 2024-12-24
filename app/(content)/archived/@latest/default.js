import NewsList from '@/components/newsList/newsList';
import { getLatestNews } from '@/lib/news';

export default function LatestNews() {
  const news = getLatestNews();
  return (
    <>
      <h1>Latest news..</h1>
      <NewsList newsList={news} />
    </>
  );
}
