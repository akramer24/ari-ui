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

var _withForm = require('../../hocs/withForm');

var _withForm2 = _interopRequireDefault(_withForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Checkbox = function Checkbox(_ref) {
  var autoFocus = _ref.autoFocus,
      checked = _ref.checked,
      className = _ref.className,
      defaultChecked = _ref.defaultChecked,
      id = _ref.id,
      name = _ref.name,
      onChange = _ref.onChange,
      required = _ref.required;

  var passthroughToCheckbox = (0, _lodash.omitBy)({ checked: checked, id: id, name: name, onChange: onChange }, _lodash.isUndefined);

  return _react2.default.createElement('input', _extends({
    autoFocus: autoFocus,
    className: (0, _classnames2.default)('ari-ui-checkbox', _defineProperty({}, className, className)),
    defaultChecked: defaultChecked,
    required: required,
    type: 'checkbox'
  }, passthroughToCheckbox));
};

Checkbox.defaultProps = {
  defaultChecked: false
};

exports.default = (0, _withForm2.default)(Checkbox);