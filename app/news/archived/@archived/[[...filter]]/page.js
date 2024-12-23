import NewsList from '@/components/newsList/newsList';
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import { newsObjects } from '@/newObject';
import Link from 'next/link';

export default async function FilteredNews({ params }) {
  const filter = (await params).filter;
    let links = getAvailableNewsYears();
  const [selectedYear, selectedMonth] = filter ?? [];

  let news = newsObjects;
  if (selectedYear && !selectedMonth) {
    links = getAvailableNewsMonths(selectedYear);
    news = getNewsForYear(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    links = [];
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
  }
 
  return (
    <>
      <header id='archive-header'>
        <nav>
          <ul>
            {links.map(link => {
              const href = selectedYear ? `/news/archived/${selectedYear}/${link}` : `/news/archived/${link}`
              return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            )})}
          </ul>
        </nav>
        <NewsList newsList={news} />
      </header>
    </>
  );
}
