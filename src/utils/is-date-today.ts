export function isDateToday(date: Date): boolean {
  const now = new Date();
  return (
    date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()
  );
}
