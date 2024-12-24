import NewsList from '@/components/newsList/newsList';
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import { newsObjects } from '@/newObject';
import Link from 'next/link';

export default async function FilteredNews({ params }) {
  const filter = (await params).filter;
  const [selectedYear, selectedMonth] = filter ?? [];
  
  const availableMonths = getAvailableNewsMonths(selectedYear);
  const availableYears = getAvailableNewsYears();

  if((selectedYear && !availableYears.includes(+selectedYear)) || (selectedMonth && !availableMonths.includes(+selectedMonth))){
    throw Error('Invalid request.')
  }
  
  let links = availableYears;
  let news = newsObjects;
  if (selectedYear && !selectedMonth) {
    links = availableMonths;
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
              const href = selectedYear ? `/archived/${selectedYear}/${link}` : `/archived/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <NewsList newsList={news} />
      </header>
    </>
  );
}
