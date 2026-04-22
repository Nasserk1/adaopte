export async function sql(query : string, params = []) {
  const res = await fetch('https://adaopte-api.onrender.com/sql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, params })
  });
  return res.json();
}