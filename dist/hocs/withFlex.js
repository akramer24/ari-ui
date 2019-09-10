'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withFlex = function withFlex(Component, direction) {
  return function (_ref) {
    var children = _ref.children,
        horizontalAlignment = _ref.horizontalAlignment,
        style = _ref.style,
        verticalAlignment = _ref.verticalAlignment,
        wrap = _ref.wrap;

    var horizontalAlignmentClass = void 0;

    switch (horizontalAlignment) {
      case 'center':
        horizontalAlignmentClass = direction === 'row' ? 'ari-ui-justify-center' : 'ari-ui-align-center';
        break;
      case 'top':
        horizontalAlignmentClass = 'ari-ui-align-start';
        break;
      case 'bottom':
        horizontalAlignmentClass = 'ari-ui-align-end';
        break;
      case 'left':
        horizontalAlignmentClass = 'ari-ui-justify-start';
        break;
      case 'right':
        horizontalAlignmentClass = 'ari-ui-justify-end';
        break;
      case 'space-evenly':
        horizontalAlignmentClass = direction === 'row' ? 'ari-ui-justify-even' : 'ari-ui-align-even';
        break;
      case 'space-between':
        horizontalAlignmentClass = direction === 'row' ? 'ari-ui-justify-between' : 'ari-ui-align-between';
        break;
      case 'space-around':
        horizontalAlignmentClass = direction === 'row' ? 'ari-ui-justify-around' : 'ari-ui-align-around';
        break;
      default:
        horizontalAlignmentClass = direction === 'row' ? 'ari-ui-justify-start' : 'ari-ui-align-start';
    }

    var verticalAlignmentClass = void 0;

    switch (verticalAlignment) {
      case 'top':
        verticalAlignmentClass = 'ari-ui-align-start';
        break;
      case 'bottom':
        verticalAlignmentClass = 'ari-ui-align-end';
        break;
      case 'left':
        verticalAlignmentClass = 'justify-left';
        break;
      case 'right':
        verticalAlignmentClass = 'justify-right';
        break;
      case 'space-evenly':
        verticalAlignmentClass = direction === 'row' ? 'ari-ui-align-even' : 'ari-ui-justify-even';
        break;
      case 'space-between':
        verticalAlignmentClass = direction === 'row' ? 'ari-ui-align-between' : 'ari-ui-justify-between';
        break;
      case 'space-around':
        verticalAlignmentClass = direction === 'row' ? 'ari-ui-align-around' : 'ari-ui-justify-around';
        break;
      default:
        verticalAlignmentClass = direction === 'row' ? 'ari-ui-align-center' : 'ari-ui-justify-start';
    }

    return _react2.default.createElement(
      Component,
      {
        className: (0, _classnames2.default)(horizontalAlignmentClass, verticalAlignmentClass, {
          'ari-ui-flex-row': direction === 'row',
          'ari-ui-flex-column': direction === 'column',
          'ari-ui-wrap': wrap
        }),
        style: style
      },
      children
    );
  };
};

exports.default = withFlex;