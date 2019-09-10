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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FormItem = function FormItem(Component) {
  return _react2.default.forwardRef(function (_ref, ref) {
    var error = _ref.error,
        label = _ref.label,
        labelPosition = _ref.labelPosition,
        style = _ref.style,
        rest = _objectWithoutProperties(_ref, ['error', 'label', 'labelPosition', 'style']);

    var width = null;
    var maxWidth = null;

    if (style) {
      width = style.width;
      maxWidth = style.maxWidth;
      delete style.width;
      delete style.maxWidth;
    }

    return _react2.default.createElement(
      'div',
      {
        className: (0, _classnames2.default)('ari-ui-form-item', {
          'ari-ui-form-item-with-label-left': labelPosition === 'left',
          'ari-ui-form-item-with-label-top': !labelPosition || labelPosition === 'top'
        }),
        style: { width: width, maxWidth: maxWidth }
      },
      label && _react2.default.createElement(
        'div',
        { className: 'ari-ui-form-item-label' },
        label,
        ':\xA0'
      ),
      _react2.default.createElement(
        'div',
        { className: 'ari-ui-form-item-component' },
        _react2.default.createElement(Component, _extends({}, rest, {
          style: style,
          ref: ref
        })),
        error ? _react2.default.createElement(
          'div',
          { className: 'ari-ui-form-item-error' },
          error
        ) : null
      )
    );
  });
};

var withForm = function withForm(Component) {
  return FormItem(Component);
};

FormItem.propTypes = {
  /**
   * Error to display.
   */
  error: _propTypes2.default.string,
  /**
   * Label for FormItem.
   */
  label: _propTypes2.default.string,
  /**
   * Determines position of label.
   */
  labelPosition: _propTypes2.default.oneOf(['left', 'top']),
  /**
   * Style applied to FormItem.
   */
  style: _propTypes2.default.object
};

exports.default = withForm;