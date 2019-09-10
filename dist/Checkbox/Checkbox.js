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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withForm = require('../hocs/withForm');

var _withForm2 = _interopRequireDefault(_withForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Checkbox = function Checkbox(_ref) {
  var autoFocus = _ref.autoFocus,
      checked = _ref.checked,
      className = _ref.className,
      disabled = _ref.disabled,
      id = _ref.id,
      name = _ref.name,
      onChange = _ref.onChange,
      required = _ref.required;

  var passthroughToCheckbox = (0, _lodash.omitBy)({
    autoFocus: autoFocus,
    checked: checked,
    disabled: disabled,
    id: id,
    name: name,
    onChange: onChange,
    required: required
  }, _lodash.isUndefined);

  return _react2.default.createElement('input', _extends({
    className: (0, _classnames2.default)('ari-ui-checkbox', _defineProperty({}, className, className)),
    type: 'checkbox'
  }, passthroughToCheckbox));
};

Checkbox.defaultProps = {
  /**
   * Determines whether or not Checkbox has focus on mount.
   */
  autoFocus: _propTypes2.default.bool,
  /**
   * Determines whether or not Checkbox is checked.
   */
  checked: _propTypes2.default.bool,
  /**
   * CSS class(es) applied to Checkbox.
   */
  className: _propTypes2.default.string,
  /**
   * Determines whether or not Checkbox is disabled
   */
  disabled: _propTypes2.default.bool,
  /**
   * CSS id applied to Checkbox.
   */
  id: _propTypes2.default.string,
  /**
   * Name of Checkbox.
   */
  name: _propTypes2.default.string,
  /**
   * Callback griggered on check/uncheck.
   */
  onChange: _propTypes2.default.func,
  /**
   * Determines whether or not Checkbox is required.
   */
  required: _propTypes2.default.bool
};

exports.default = (0, _withForm2.default)(Checkbox);