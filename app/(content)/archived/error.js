'use client';

export default function ArchivedPagesError({ error }) {
  return (
    <>
      <h1>Some error occurred</h1>
      <h5>{error.message}</h5>
    </>
  );
}
