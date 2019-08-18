'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Line to be used to separate content.
 */

var Divider = function Divider(_ref) {
  var _classNames;

  var className = _ref.className,
      alignment = _ref.alignment,
      id = _ref.id,
      style = _ref.style;
  return _react2.default.createElement('div', {
    className: (0, _classnames2.default)('ari-ui-divider', (_classNames = {}, _defineProperty(_classNames, className, className), _defineProperty(_classNames, 'ari-ui-divider-horizontal', alignment === 'horizontal'), _defineProperty(_classNames, 'ari-ui-divider-vertical', alignment === 'vertical'), _classNames)),
    id: id,
    style: style
  });
};

Divider.defaultProps = {
  alignment: 'horizontal'
};

Divider.propTypes = {
  /**
   * Determines how Divider aligns.
   */
  alignment: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  /**
   * CSS class(es) applied to Card.
   */
  className: _propTypes2.default.string,
  /**
   * CSS id applied to Card.
   */
  id: _propTypes2.default.string,
  /**
   * CSS styling for card.
   */
  style: _propTypes2.default.object
};

exports.default = Divider;