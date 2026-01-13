export async function sql(query : string, params = []) {
  const res = await fetch('http://localhost:3001/sql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, params })
  });
  return res.json();
}