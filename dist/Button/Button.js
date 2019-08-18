'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

require('./Button.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = function Button(_ref) {
  var _classNames;

  var appearance = _ref.appearance,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      edge = _ref.edge,
      id = _ref.id,
      onClick = _ref.onClick,
      style = _ref.style,
      type = _ref.type;

  var passthroughToButton = (0, _lodash.omitBy)({
    onClick: onClick,
    style: style
  }, _lodash.isUndefined);

  var appearanceClassName = void 0;
  switch (appearance) {
    case 'primary':
      appearanceClassName = 'ari-ui-btn-primary';
      break;
    case 'danger':
      appearanceClassName = 'ari-ui-btn-danger';
      break;
    default:
      appearanceClassName = 'ari-ui-btn-default';
  }

  return _react2.default.createElement(
    'button',
    _extends({}, passthroughToButton, {
      className: (0, _classnames2.default)('ari-ui-btn', appearanceClassName, (_classNames = {}, _defineProperty(_classNames, className, className), _defineProperty(_classNames, 'ari-ui-btn-disabled', disabled), _defineProperty(_classNames, 'ari-ui-btn-rounded-edge', edge === 'round'), _classNames)),
      id: id,
      disabled: disabled,
      type: type
    }),
    children
  );
};

Button.defaultProps = {
  disabled: false,
  edge: 'straight',
  appearance: 'default',
  type: 'button'
};

Button.propTypes = {
  /**
   * Content inside Button.
   */
  children: _propTypes2.default.string.isRequired,
  /**
   * CSS class(es) applied to Button.
   */
  className: _propTypes2.default.string,
  /**
   * Determines whether or not Button is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Determines whether Button takes a straight or round edge.
   */
  edge: _propTypes2.default.oneOf(['straight', 'round']),
  /**
   * CSS id applied to Button.
   */
  id: _propTypes2.default.string,
  /**
   * Button appearance.
   */
  appearance: _propTypes2.default.oneOf(['default', 'primary', 'danger']),
  /**
   * Callback triggered by clicking Button.
   */
  onClick: _propTypes2.default.func,
  /**
   * CSS styling applied to Button.
   */
  style: _propTypes2.default.object,
  /**
   * Button type.
   */
  type: _propTypes2.default.oneOf(['button', 'submit', 'reset'])
};

exports.default = Button;