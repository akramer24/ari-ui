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

var _Divider = require('../Divider/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Rectangular container, used to display content.
 */

var Card = function Card(_ref) {
  var bordered = _ref.bordered,
      children = _ref.children,
      className = _ref.className,
      footer = _ref.footer,
      footerStyle = _ref.footerStyle,
      header = _ref.header,
      headerStyle = _ref.headerStyle,
      id = _ref.id,
      padded = _ref.padded,
      style = _ref.style;

  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)('ari-ui-card', _defineProperty({
        'ari-ui-card-bordered': bordered
      }, className, className)),
      id: id,
      style: style
    },
    header ? _react2.default.createElement(
      'div',
      { className: 'ari-ui-card-header', style: headerStyle },
      _react2.default.createElement(
        'div',
        { className: 'ari-ui-small-padding' },
        header
      ),
      _react2.default.createElement(_Divider2.default, null)
    ) : null,
    _react2.default.createElement(
      'div',
      {
        className: (0, _classnames2.default)('ari-ui-card-content', {
          'ari-ui-small-padding': padded
        })
      },
      children
    ),
    footer ? _react2.default.createElement(
      'div',
      { className: 'ari-ui-card-footer', style: footerStyle },
      _react2.default.createElement(_Divider2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'ari-ui-small-padding' },
        footer
      )
    ) : null
  );
};

Card.defaultProps = {
  bordered: true,
  padded: true
};

Card.propTypes = {
  /**
   * Determines whether or not card has a border.
   */
  bordered: _propTypes2.default.bool,
  /**
   * CSS class(es) applied to Card.
   */
  className: _propTypes2.default.string,
  /**
   * Card footer.
   */
  footer: _propTypes2.default.node,
  /**
   * CSS styling for footer.
   */
  footerStyle: _propTypes2.default.object,
  /**
   * Card header.
   */
  header: _propTypes2.default.node,
  /**
   * CSS styling for header.
   */
  headerStyle: _propTypes2.default.object,
  /**
   * CSS id applied to Card.
   */
  id: _propTypes2.default.string,
  /**
   * Determines whether or not card content is padded.
   */
  padded: _propTypes2.default.bool,
  /**
   * CSS styling for card.
   */
  style: _propTypes2.default.object
};

exports.default = Card;