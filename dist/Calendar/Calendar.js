'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _fa = require('react-icons/fa');

var _utils = require('./utils');

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Form = require('../Form/Form');

var _Form2 = _interopRequireDefault(_Form);

var _Input = require('../Input/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Modal = require('../Modal/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _TextArea = require('../TextArea/TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Events
// {date: []}

var Calendar = function Calendar(props) {
  var maxWidth = props.maxWidth,
      onPanelChange = props.onPanelChange;

  var _useState = (0, _react.useState)((0, _moment2.default)().month()),
      _useState2 = _slicedToArray(_useState, 2),
      monthIdx = _useState2[0],
      setMonthIdx = _useState2[1];

  var month = _utils.months[monthIdx];

  var _useState3 = (0, _react.useState)((0, _moment2.default)().year()),
      _useState4 = _slicedToArray(_useState3, 2),
      year = _useState4[0],
      setYear = _useState4[1];

  var totalDaysInMonth = (0, _utils.getTotalDaysInMonth)(monthIdx, year);
  var totalDaysArr = Array(totalDaysInMonth).fill().map(function (_, idx) {
    return 1 + idx;
  });
  var firstDayIndex = (0, _utils.getFirstDayIndex)(month, year);
  var nextMonthDaysArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  var previousMonthIdx = monthIdx > 0 ? monthIdx - 1 : 11;
  var totalDaysInPreviousMonth = (0, _utils.getTotalDaysInMonth)(previousMonthIdx, year);
  var totalDaysInPreviousMonthArr = Array(totalDaysInPreviousMonth).fill().map(function (_, idx) {
    return 1 + idx;
  }).slice(-firstDayIndex);

  var _useState5 = (0, _react.useState)((0, _moment2.default)()),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedDate = _useState6[0],
      setSelectedDate = _useState6[1];

  var _useState7 = (0, _react.useState)((0, _moment2.default)().date() + firstDayIndex - 1),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedDateIndex = _useState8[0],
      setSelectedDateIndex = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isModalVisible = _useState10[0],
      setIsModalVisible = _useState10[1];

  var _useState11 = (0, _react.useState)(props.events),
      _useState12 = _slicedToArray(_useState11, 2),
      events = _useState12[0],
      setEvents = _useState12[1];

  var _useState13 = (0, _react.useState)({}),
      _useState14 = _slicedToArray(_useState13, 2),
      selectedEvent = _useState14[0],
      setSelectedEvent = _useState14[1];

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'div',
      { className: 'ari-ui-calendar-container', style: { maxWidth: maxWidth } },
      _react2.default.createElement(
        'div',
        { className: 'ari-ui-calendar-header' },
        _react2.default.createElement(
          'div',
          { className: 'ari-ui-calendar-navigation-container' },
          _react2.default.createElement(_fa.FaAngleDoubleLeft, {
            className: 'ari-ui-calendar-navigation-arrow',
            onClick: function onClick() {
              return (0, _utils.changeYear)(monthIdx, year, setYear, 'retreat', onPanelChange);
            }
          }),
          _react2.default.createElement(_fa.FaAngleLeft, {
            className: 'ari-ui-calendar-navigation-arrow',
            onClick: function onClick() {
              return (0, _utils.changeMonth)(monthIdx, year, setMonthIdx, setYear, 'retreat', onPanelChange);
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'ari-ui-calendar-header-month' },
          month + ' ' + year
        ),
        _react2.default.createElement(
          'div',
          { className: 'ari-ui-calendar-navigation-container' },
          _react2.default.createElement(_fa.FaAngleRight, {
            className: 'ari-ui-calendar-navigation-arrow',
            onClick: function onClick() {
              return (0, _utils.changeMonth)(monthIdx, year, setMonthIdx, setYear, 'advance', onPanelChange);
            }
          }),
          _react2.default.createElement(_fa.FaAngleDoubleRight, {
            className: 'ari-ui-calendar-navigation-arrow',
            onClick: function onClick() {
              return (0, _utils.changeYear)(monthIdx, year, setYear, 'advance', onPanelChange);
            }
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'ari-ui-calendar-body' },
        _react2.default.createElement(
          'div',
          { className: 'ari-ui-calendar-header-cell ari-ui-calendar-cell' },
          'Sun'
        ),
        _react2.default.createElement(
          'div',
          { className: 'ari-ui-calendar-header-cell ari-ui-calendar-cell' },
          'Mon'
        ),
        _react2.default.createElement(
          'div',
          { className: 'ari-ui-calendar-header-cell ari-ui-calendar-cell' },
          'Tue'
        ),
        _react2.default.createElement(
          'div',
          { className: 'ari-ui-calendar-header-cell ari-ui-calendar-cell' },
          'Wed'
        ),
        _react2.default.createElement(
          'div',
          { className: 'ari-ui-calendar-header-cell ari-ui-calendar-cell' },
          'Thu'
        ),
        _react2.default.createElement(
          'div',
          { className: 'ari-ui-calendar-header-cell ari-ui-calendar-cell' },
          'Fri'
        ),
        _react2.default.createElement(
          'div',
          { className: 'ari-ui-calendar-header-cell ari-ui-calendar-cell' },
          'Sat'
        ),
        [].concat(_toConsumableArray(Array(42).keys())).map(function (i) {
          var isDateInActiveMonth = i >= firstDayIndex && i < firstDayIndex + totalDaysInMonth;
          var date = isDateInActiveMonth ? totalDaysArr[i - firstDayIndex] : i >= firstDayIndex + totalDaysInMonth ? nextMonthDaysArr[i - firstDayIndex - totalDaysInMonth] : totalDaysInPreviousMonthArr[i];
          var formattedDate = (0, _utils.getMomentObject)(month, date, year).format('YYYY-MM-DD');
          var dateEvents = events[formattedDate];
          return _react2.default.createElement(
            'div',
            {
              key: month + '-' + i,
              className: (0, _classnames2.default)('ari-ui-calendar-cell-container', {
                'ari-ui-calendar-cell-active': isDateInActiveMonth,
                'ari-ui-calendar-cell-selected': i === selectedDateIndex && selectedDate.month() === monthIdx
              }),
              onClick: function onClick() {
                return (0, _utils.handleDateSelect)(date, month, year, i, setSelectedDate, setSelectedDateIndex, setIsModalVisible);
              }
            },
            _react2.default.createElement(
              'div',
              {
                className: (0, _classnames2.default)('ari-ui-calendar-date-cell', 'ari-ui-calendar-cell', {
                  'ari-ui-calendar-date-cell-inactive': !isDateInActiveMonth
                })
              },
              date
            ),
            _react2.default.createElement(
              'div',
              { className: 'ari-ui-calendar-events-container' },
              dateEvents && dateEvents.map(function (event, idx) {
                return _react2.default.createElement(
                  'div',
                  {
                    key: formattedDate + '-' + idx,
                    className: 'ari-ui-calendar-event',
                    onClick: function onClick() {
                      return setSelectedEvent(event);
                    }
                  },
                  '\u2022 ',
                  event.event
                );
              })
            )
          );
        })
      )
    ),
    _react2.default.createElement(
      _Modal2.default,
      {
        clickMaskToClose: true,
        onClose: function onClose() {
          setIsModalVisible(false);setSelectedEvent({});
        },
        title: selectedDate.format('MMMM D[,] YYYY'),
        visible: isModalVisible,
        width: 400
      },
      _react2.default.createElement(_Form2.default, {
        columnWidth: null,
        content: [[_react2.default.createElement(_Input2.default, { name: 'event', labelPosition: 'left', label: 'Event', value: selectedEvent.event || '' }), _react2.default.createElement(_Input2.default, { name: 'time', labelPosition: 'left', label: 'Time', value: selectedEvent.time || '' }), _react2.default.createElement(_TextArea2.default, {
          name: 'description',
          labelPosition: 'top',
          label: 'Description',
          resizable: false,
          rows: 7,
          style: { height: 100 },
          type: 'text',
          value: selectedEvent.description || ''
        }), _react2.default.createElement(
          _Button2.default,
          { kind: 'primary', type: 'submit' },
          'Add event'
        )]],
        onSubmit: function onSubmit(evt) {
          return (0, _utils.addEvent)(evt, selectedDate.format('YYYY-MM-DD'), events, setEvents, setIsModalVisible);
        }
      })
    )
  );
};

Calendar.defaultProps = {
  events: { '2019-07-14': [{ event: 'Dr.' }] }
};

Calendar.propTypes = {
  /**
   * Calendar will grow to width of its parent. Set maxWidth if you do not want this behavior.
   */
  maxWidth: _propTypes2.default.number,
  /**
   * Callback triggered by changing either the month or year.
   * 
   * @param {Number} newMonthIndex Index of new month i.e. January = 0, December = 12.
   * @param {Number} newYear Year.
   */
  onPanelChange: _propTypes2.default.func,
  /**
   * Callback triggered by selecting a date.
   * 
   * @param {Object} date Selected date, as a moment.js object.
   */
  onSelect: _propTypes2.default.func
};

exports.default = Calendar;