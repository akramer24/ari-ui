'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _withForm = require('../hocs/withForm');

var _withForm2 = _interopRequireDefault(_withForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextArea = function TextArea(_ref) {
  var name = _ref.name,
      onChange = _ref.onChange,
      resizable = _ref.resizable,
      rows = _ref.rows,
      style = _ref.style,
      value = _ref.value;

  var passthroughToTextArea = (0, _lodash.omitBy)({
    name: name
  }, _lodash.isUndefined);

  return _react2.default.createElement(
    'div',
    { className: 'ari-ui-text-area-container', style: style },
    _react2.default.createElement('textarea', _extends({}, passthroughToTextArea, {
      className: (0, _classnames2.default)('ari-ui-text-area', {
        'ari-ui-text-area-no-resize': resizable === false
      }),
      onChange: onChange,
      rows: rows,
      value: value
    }))
  );
};

TextArea.defaultProps = {
  resizable: true,
  rows: 4
};

exports.default = (0, _withForm2.default)(TextArea);