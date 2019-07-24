import moment from 'moment';

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getFirstDayOfMonth = (month, year) => {
  const date = new Date(`${month} 1, ${year}`)
  return moment(date).day();
}

export const getTotalDaysInMonth = (month, year) => {
  const days31 = [0, 2, 4, 6, 7, 9, 11];
  const days30 = [3, 5, 8, 10];
  const febDays = year % 4 === 0 ? 29 : 28;
  return days31.includes(month)
    ? 31
    : days30.includes(month)
      ? 30
      : febDays;
}

export const getFirstDayIndex = (month, year) => {
  const day = getFirstDayOfMonth(month, year);
  return day === 0
    ? 7
    : day;
}

export const advanceOneMonth = (month, year, setMonth, setYear) => {
  if (month < 11) {
    setMonth(month + 1);
  } else {
    setMonth(0);
    setYear(year + 1);
  }
}

export const retreatOneMonth = (month, year, setMonth, setYear) => {
  if (month > 0) {
    setMonth(month - 1);
  } else {
    setMonth(11);
    setYear(year - 1);
  }
}