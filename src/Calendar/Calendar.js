import React, { useState } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import {
  advanceOneMonth,
  retreatOneMonth,
  getFirstDayIndex,
  getTotalDaysInMonth,
  months
} from './utils';

const Calendar = () => {
  const [monthIdx, setMonthIdx] = useState(moment().month());
  const month = months[monthIdx];
  const [year, setYear] = useState(moment().year());
  const totalDaysInMonth = getTotalDaysInMonth(monthIdx, year);
  const totalDaysArr = Array(totalDaysInMonth).fill().map((_, idx) => 1 + idx);
  const firstDayIndex = getFirstDayIndex(month, year);
  const nextMonthDaysArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const previousMonthIdx = monthIdx > 0 ? monthIdx - 1 : 11;
  const totalDaysInPreviousMonth = getTotalDaysInMonth(previousMonthIdx, year);
  const totalDaysInPreviousMonthArr = Array(totalDaysInPreviousMonth).fill().map((_, idx) => 1 + idx).slice(-firstDayIndex);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => retreatOneMonth(monthIdx, year, setMonthIdx, setYear)}>Prev</button>
        <div className="calendar-header-month">{`${month} ${year}`}</div>
        <button onClick={() => advanceOneMonth(monthIdx, year, setMonthIdx, setYear)}>Next</button>
      </div>
      <div className="calendar-body">
        <div className="calendar-header-cell calendar-cell">Sun</div>
        <div className="calendar-header-cell calendar-cell">Mon</div>
        <div className="calendar-header-cell calendar-cell">Tue</div>
        <div className="calendar-header-cell calendar-cell">Wed</div>
        <div className="calendar-header-cell calendar-cell">Thu</div>
        <div className="calendar-header-cell calendar-cell">Fri</div>
        <div className="calendar-header-cell calendar-cell">Sat</div>
        {
          [...Array(42).keys()].map(i => {
            const isDateInActiveMonth = i >= firstDayIndex && i < firstDayIndex + totalDaysInMonth;
            const date =
              isDateInActiveMonth
                ? totalDaysArr[i - firstDayIndex]
                : i >= firstDayIndex + totalDaysInMonth
                  ? nextMonthDaysArr[i - firstDayIndex - totalDaysInMonth]
                  : totalDaysInPreviousMonthArr[i]

            return (
              <div
                key={`${month}-${i}`}
                className="calendar-cell-container"
              >
                <div
                  className={classNames(
                    'calendar-date-cell',
                    'calendar-cell',
                    {
                      'calendar-date-cell-inactive': !isDateInActiveMonth
                    }
                  )}
                >
                  {date}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Calendar;