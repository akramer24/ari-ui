'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withFlex = require('../hocs/withFlex');

var _withFlex2 = _interopRequireDefault(_withFlex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;
  return _react2.default.createElement(
    'div',
    {
      className: className,
      style: style
    },
    children
  );
};

Row.defaultProps = {
  horizontalAlignment: 'left',
  verticalAlignment: 'center',
  wrap: true
};

Row.propTypes = {
  /**
   * Row content.
   */
  children: _propTypes2.default.array,
  /**
   * Determines how row content is aligned horizontally.
   */
  horizontalAlignment: _propTypes2.default.oneOf(['center', 'left', 'right', 'space-evenly', 'space-between', 'space-around']),
  /**
   * Style applied to Row.
   */
  style: _propTypes2.default.object,
  /**
   * Determines how row content is aligned vertically.
   */
  verticalAlignment: _propTypes2.default.oneOf(['center', 'top', 'bottom', 'space-evenly', 'space-between', 'space-around']),
  /**
   * Determines whether content should wrap when it does not fit on screen.
   */
  wrap: _propTypes2.default.bool
};

exports.default = (0, _withFlex2.default)(Row, 'row');