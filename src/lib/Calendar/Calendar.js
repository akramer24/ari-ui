import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import {
  FaAngleLeft,
  FaAngleDoubleLeft,
  FaAngleRight,
  FaAngleDoubleRight
} from 'react-icons/fa';
import {
  addEvent,
  changeMonth,
  changeYear,
  getFirstDayIndex,
  getMomentObject,
  getTotalDaysInMonth,
  handleDateSelect,
  months
} from './utils';
import Button from '../Button/Button';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import TextArea from '../TextArea/TextArea';

// Events
// {date: []}

const Calendar = (props) => {
  const { maxWidth, onPanelChange } = props;
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
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedDateIndex, setSelectedDateIndex] = useState(moment().date() + firstDayIndex - 1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [events, setEvents] = useState(props.events);
  const [selectedEvent, setSelectedEvent] = useState({});

  return (
    <React.Fragment>
      <div className="calendar-container" style={{ maxWidth }}>
        <div className="calendar-header">
          <div className="calendar-navigation-container">
            <FaAngleDoubleLeft
              className="calendar-navigation-arrow"
              onClick={() => changeYear(monthIdx, year, setYear, 'retreat', onPanelChange)}
            />
            <FaAngleLeft
              className="calendar-navigation-arrow"
              onClick={() => changeMonth(monthIdx, year, setMonthIdx, setYear, 'retreat', onPanelChange)}
            />
          </div>
          <div className="calendar-header-month">{`${month} ${year}`}</div>
          <div className="calendar-navigation-container">
            <FaAngleRight
              className="calendar-navigation-arrow"
              onClick={() => changeMonth(monthIdx, year, setMonthIdx, setYear, 'advance', onPanelChange)}
            />
            <FaAngleDoubleRight
              className="calendar-navigation-arrow"
              onClick={() => changeYear(monthIdx, year, setYear, 'advance', onPanelChange)}
            />
          </div>
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
              const formattedDate = getMomentObject(month, date, year).format('YYYY-MM-DD');
              const dateEvents = events[formattedDate];
              return (
                <div
                  key={`${month}-${i}`}
                  className={classNames(
                    'calendar-cell-container',
                    {
                      'calendar-cell-active': isDateInActiveMonth,
                      'calendar-cell-selected': i === selectedDateIndex && selectedDate.month() === monthIdx
                    }
                  )}
                  onClick={() => handleDateSelect(date, month, year, i, setSelectedDate, setSelectedDateIndex, setIsModalVisible)}
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
                  <div className="calendar-events-container">
                    {
                      dateEvents && dateEvents.map((event, idx) => (
                        <div
                          key={`${formattedDate}-${idx}`}
                          className="calendar-event"
                          onClick={() => setSelectedEvent(event)}
                        >
                          &bull; {event.event}
                        </div>
                      ))
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <Modal
        clickMaskToClose={true}
        onClose={() => { setIsModalVisible(false); setSelectedEvent({}); }}
        title={selectedDate.format('MMMM D[,] YYYY')}
        visible={isModalVisible}
        width={400}
      >
        <Form
          columnWidth={null}
          content={[[
            <Input name="event" labelPosition="left" label="Event" value={selectedEvent.event || ''} />,
            <Input name="time" labelPosition="left" label="Time" value={selectedEvent.time || ''} />,
            <TextArea
              name="description"
              labelPosition="top"
              label="Description"
              resizable={false}
              rows={7}
              style={{ height: 100 }}
              type="text"
              value={selectedEvent.description || ''}
            />,
            <Button kind="primary" type="submit">Add event</Button>
          ]]}
          onSubmit={evt => addEvent(evt, selectedDate.format('YYYY-MM-DD'), events, setEvents, setIsModalVisible)}
        />
      </Modal>
    </React.Fragment>
  )
}

Calendar.defaultProps = {
  events: { '2019-07-14': [{ event: 'Dr.' }] }
}

Calendar.propTypes = {
  /**
   * Calendar will grow to width of its parent. Set maxWidth if you do not want this behavior.
   */
  maxWidth: PropTypes.number,
  /**
   * Callback triggered by changing either the month or year.
   * 
   * @param {Number} newMonthIndex Index of new month i.e. January = 0, December = 12.
   * @param {Number} newYear Year.
   */
  onPanelChange: PropTypes.func,
  /**
   * Callback triggered by selecting a date.
   * 
   * @param {Object} date Selected date, as a moment.js object.
   */
  onSelect: PropTypes.func
}

export default Calendar;
