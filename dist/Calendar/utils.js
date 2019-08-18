'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEvent = exports.handleDateSelect = exports.changeYear = exports.changeMonth = exports.getFirstDayIndex = exports.getTotalDaysInMonth = exports.getFirstDayOfMonth = exports.getMomentObject = exports.months = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var months = exports.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var getMomentObject = exports.getMomentObject = function getMomentObject(month, day, year) {
  var date = new Date(month + ' ' + day + ', ' + year);
  return (0, _moment2.default)(date);
};

var getFirstDayOfMonth = exports.getFirstDayOfMonth = function getFirstDayOfMonth(month, year) {
  var date = getMomentObject(month, 1, year);
  return date.day();
};

var getTotalDaysInMonth = exports.getTotalDaysInMonth = function getTotalDaysInMonth(month, year) {
  var days31 = [0, 2, 4, 6, 7, 9, 11];
  var days30 = [3, 5, 8, 10];
  var febDays = year % 4 === 0 ? 29 : 28;
  return days31.includes(month) ? 31 : days30.includes(month) ? 30 : febDays;
};

var getFirstDayIndex = exports.getFirstDayIndex = function getFirstDayIndex(month, year) {
  var day = getFirstDayOfMonth(month, year);
  return day === 0 ? 7 : day;
};

var changeMonth = exports.changeMonth = function changeMonth(month, year, setMonthIdx, setYear, advanceOrRetreat, onPanelChange) {
  var newMonth = void 0;
  var newYear = year;

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
};

var changeYear = exports.changeYear = function changeYear(monthIdx, year, setYear, advanceOrRetreat, onPanelChange) {
  var newYear = advanceOrRetreat === 'advance' ? year + 1 : year - 1;
  setYear(newYear);
  onPanelChange && onPanelChange(monthIdx, newYear);
};

var handleDateSelect = exports.handleDateSelect = function handleDateSelect(date, month, year, selectedDateIndex, setSelectedDate, setSelectedDateIndex, setIsModalVisible) {
  var jsDate = new Date(month + ' ' + date + ', ' + year);
  var selectedDate = (0, _moment2.default)(jsDate);
  setSelectedDate(selectedDate);
  setSelectedDateIndex(selectedDateIndex);
  setIsModalVisible(true);
};

var addEvent = exports.addEvent = function addEvent(evt, date, events, setEvents, setIsModalVisible) {
  var eventInfo = { event: evt.target.event.value, time: evt.target.time.value, description: evt.target.description.value };
  if (events[date]) {
    setEvents(_extends({}, events, _defineProperty({}, date, [].concat(_toConsumableArray(events[date]), [eventInfo]))));
  } else {
    setEvents(_extends({}, events, _defineProperty({}, date, [eventInfo])));
  }
  setIsModalVisible(false);
};