import Link from "next/link";

export default function ArchivedNewsLayout({ archived, latest }) {
  return (
    <div>
      <Link href="/news/archived"><h1>News Archive</h1></Link>
      <section id="archive-filter">{archived}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
