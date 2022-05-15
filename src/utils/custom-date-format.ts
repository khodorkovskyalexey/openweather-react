import { stringDateParser } from './string-date-parser';

export function getDateInCustomFormat(date: Date) {
  if (typeof date === 'string') {
    date = stringDateParser(date);
  }
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const day = date.getDate();
  const month = date.getMonth();

  return `${day} ${monthNames[month]}`;
}
