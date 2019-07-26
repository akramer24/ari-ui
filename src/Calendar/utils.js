import moment from 'moment';

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getFirstDayOfMonth = (month, year) => {
  const date = new Date(`${month} 1, ${year}`);
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

export const changeMonth = (month, year, setMonthIdx, setYear, advanceOrRetreat, onPanelChange) => {
  let newMonth;
  let newYear = year;

  if (advanceOrRetreat === 'advance') {
    if (month < 11) {
      newMonth = month + 1;
    } else {
      newMonth = 0;
      newYear = year + 1;
    }
  } else {
    if (month > 0) {
      newMonth = month - 1;
    } else {
      newMonth = 11;
      newYear = year - 1;
    }
  }

  setMonthIdx(newMonth);
  setYear(newYear);
  onPanelChange && onPanelChange(newMonth, newYear);
}

export const changeYear = (monthIdx, year, setYear, advanceOrRetreat, onPanelChange) => {
  const newYear = advanceOrRetreat === 'advance' ? year + 1 : year - 1;
  setYear(newYear);
  onPanelChange && onPanelChange(monthIdx, newYear);
}

export const handleDateSelect = (date, month, year, selectedDateIndex, setSelectedDate, setSelectedDateIndex, onSelect) => {
  const jsDate = new Date(`${month} ${date}, ${year}`);
  const selectedDate = moment(jsDate);
  setSelectedDate(selectedDate);
  setSelectedDateIndex(selectedDateIndex);
  onSelect && onSelect(selectedDate);
}