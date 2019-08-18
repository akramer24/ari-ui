'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _uniqid = require('uniqid');

var _uniqid2 = _interopRequireDefault(_uniqid);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = function Dropdown(_ref) {
  var activeChoiceIndex = _ref.activeChoiceIndex,
      choices = _ref.choices,
      choiceHeight = _ref.choiceHeight,
      handleHoverChoice = _ref.handleHoverChoice,
      handleSelectChoice = _ref.handleSelectChoice,
      id = _ref.id,
      parentId = _ref.parentId;

  var maxToRender = 30;
  var maxToShow = 10;

  var _useState = (0, _react.useState)(maxToRender),
      _useState2 = _slicedToArray(_useState, 2),
      endIdx = _useState2[0],
      setEndIdx = _useState2[1];

  var getDropdownStyle = function getDropdownStyle() {
    var parent = document.querySelector('#' + parentId + ' .ari-ui-dropdown-parent');
    if (parent) {
      var _parent$getBoundingCl = parent.getBoundingClientRect(),
          top = _parent$getBoundingCl.top,
          left = _parent$getBoundingCl.left,
          height = _parent$getBoundingCl.height,
          width = _parent$getBoundingCl.width;

      return { top: top + height, left: left, width: width };
    }
  };

  var topBottomPadding = 3;
  var leftRightPadding = 5;

  var scrollIndex = endIdx;

  var handleScroll = function handleScroll(e) {
    if (e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 100) {
      scrollIndex += maxToRender;
      setEndIdx(scrollIndex);
    }
  };

  return _reactDom2.default.createPortal(_react2.default.createElement(
    'div',
    {
      className: 'ari-ui-dropdown',
      onScroll: handleScroll,
      style: _extends({}, getDropdownStyle(), { maxHeight: choiceHeight * maxToShow })
    },
    choices && choices.slice(0, endIdx).map(function (c, idx) {
      return _react2.default.createElement(
        'div',
        {
          key: (0, _uniqid2.default)(),
          className: (0, _classnames2.default)('ari-ui-dropdown-choice', {
            'ari-ui-dropdown-choice-active': idx === activeChoiceIndex
          }),
          onClick: handleSelectChoice,
          onMouseEnter: function onMouseEnter() {
            return handleHoverChoice(idx);
          },
          style: { height: choiceHeight - 2 * topBottomPadding, padding: topBottomPadding + 'px ' + leftRightPadding + 'px' }
        },
        c
      );
    })
  ), document.getElementById(id));
};

Dropdown.defaultProps = {
  choiceHeight: 24,
  maxToShow: 10
};

exports.default = Dropdown;