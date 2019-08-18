'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _uniqid = require('uniqid');

var _uniqid2 = _interopRequireDefault(_uniqid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function Form(_ref) {
  var columnWidth = _ref.columnWidth,
      content = _ref.content,
      direction = _ref.direction,
      onSubmit = _ref.onSubmit;

  var handleSubmit = function handleSubmit(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    onSubmit && onSubmit(evt);
  };

  return _react2.default.createElement(
    'form',
    {
      className: (0, _classnames2.default)('ari-ui-form', {
        'ari-ui-form-columns': direction === 'columns',
        'ari-ui-form-rows': direction === 'rows'
      }),
      onSubmit: handleSubmit
    },
    content.map(function (group, idx) {
      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)({
            'ari-ui-form-row': direction === 'rows', 'ari-ui-form-column': direction === 'columns',
            'ari-ui-form-last-column': direction === 'columns' && idx === content.length - 1
          }),
          key: (0, _uniqid2.default)(),
          style: direction === 'columns' ? { maxWidth: columnWidth, width: columnWidth } : {}
        },
        group.map(function (el) {
          return _react2.default.cloneElement(el, _extends({}, el.props, {
            key: (0, _uniqid2.default)(),
            style: direction === 'rows' ? { maxWidth: columnWidth, width: columnWidth } : {}
          }));
        })
      );
    })
  );
};

Form.defaultProps = {
  columnWidth: 250,
  content: [],
  direction: 'columns'
};

exports.default = Form;