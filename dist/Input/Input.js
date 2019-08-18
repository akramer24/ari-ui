'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _withForm = require('../../hocs/withForm');

var _withForm2 = _interopRequireDefault(_withForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Input = _react2.default.forwardRef(function (_ref, ref) {
  var autoFocus = _ref.autoFocus,
      className = _ref.className,
      disabled = _ref.disabled,
      id = _ref.id,
      name = _ref.name,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      onFocus = _ref.onFocus,
      onKeyDown = _ref.onKeyDown,
      placeholder = _ref.placeholder,
      suffix = _ref.suffix,
      style = _ref.style,
      tabindex = _ref.tabindex,
      type = _ref.type,
      value = _ref.value;


  var passthroughToInput = (0, _lodash.omitBy)({
    autoFocus: autoFocus,
    disabled: disabled,
    name: name,
    onBlur: onBlur,
    onChange: onChange,
    onClick: onClick,
    onFocus: onFocus,
    onKeyDown: onKeyDown,
    placeholder: placeholder,
    tabindex: tabindex
  }, _lodash.isUndefined);

  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)('ari-ui-input-container', _defineProperty({}, className, className)),
      id: id,
      style: style
    },
    _react2.default.createElement('input', _extends({}, passthroughToInput, {
      autoComplete: 'off',
      className: 'ari-ui-input',
      ref: ref,
      type: type,
      value: value
    })),
    suffix ? _react2.default.createElement(
      'div',
      { className: 'ari-ui-input-suffix' },
      suffix
    ) : null
  );
});

Input.defaultProps = {
  disabled: false,
  type: 'text'
};

Input.propTypes = {
  /**
   * Determines whether or not input is auto-focused.
   */
  autoFocus: _propTypes2.default.bool,
  /**
   * CSS class(es) applied to Input.
   */
  className: _propTypes2.default.string,
  /**
   * Determines whether or not Input is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * CSS id applied to Input.
   */
  id: _propTypes2.default.string,
  /**
   * Name of Input.
   */
  name: _propTypes2.default.string,
  /**
   * Callback triggered on blur.
   */
  onBlur: _propTypes2.default.func,
  /**
   * Callback triggered on typing.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback triggered on click.
   */
  onClick: _propTypes2.default.func,
  /**
   * Callback triggered on focus.
   */
  onFocus: _propTypes2.default.func,
  /**
   * Placeholder text.
   */
  placeholder: _propTypes2.default.string,
  /**
   * Node attached to end of Input.
   */
  suffix: _propTypes2.default.node,
  /**
   * CSS styling applied to Input.
   */
  style: _propTypes2.default.object,
  /**
   * Sets input's place in the tab order.
   */
  tabindex: _propTypes2.default.number,
  /**
   * Input type.
   */
  type: _propTypes2.default.string,
  /**
   * Input value.
   */
  value: _propTypes2.default.string
};

exports.Input = Input;
exports.default = (0, _withForm2.default)(Input);