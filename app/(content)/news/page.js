import NewsList from '@/components/newsList/newsList';
import { newsObjects } from '@/newObject';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList newsList={newsObjects} />
    </>
  );
}
