import { isDateToday } from './is-date-today';

export function nextFiveDaysFilter<T>(array: T[], dateKey: keyof T) {
  return array
    .filter((weather) => {
      const fiveDayTime = new Date();
      fiveDayTime.setDate(fiveDayTime.getDate() + 5);

      return Number(weather[dateKey]) < fiveDayTime.getTime();
    })
    .filter((weather) => !isDateToday(new Date(Number(weather[dateKey]))));
}
