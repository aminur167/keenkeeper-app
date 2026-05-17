export function countThisMonth(entries) {
  const now = new Date();

  return entries.filter((entry) => {
    const date = new Date(entry.date);
    return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
  }).length;
}

export function sortNewest(entries) {
  return [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));
}
