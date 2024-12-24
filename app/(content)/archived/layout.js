import Link from "next/link";

export default function ArchivedNewsLayout({ archived, latest }) {
  return (
    <div>
      <section id="archive-filter">{archived}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
