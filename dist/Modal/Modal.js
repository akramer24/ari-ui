'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _fa = require('react-icons/fa');

var _Divider = require('../Divider/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    var div = document.createElement('div');
    div.id = 'modal-root';
    document.querySelector('body').appendChild(div);
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalDiv = document.getElementById('modal-root');
      modalDiv.remove();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          clickMaskToClose = _props.clickMaskToClose,
          closeable = _props.closeable,
          footer = _props.footer,
          id = _props.id,
          onClose = _props.onClose,
          title = _props.title,
          visible = _props.visible,
          width = _props.width;


      if (visible) {
        return _reactDom2.default.createPortal(_react2.default.createElement(
          'div',
          { className: 'ari-ui-modal-container' },
          _react2.default.createElement('div', { className: 'ari-ui-modal-overlay', onClick: clickMaskToClose ? onClose : function () {} }),
          _react2.default.createElement(
            'div',
            { className: 'ari-ui-modal-dialog' },
            _react2.default.createElement(
              'div',
              { className: (0, _classnames2.default)('ari-ui-modal', _defineProperty({}, className, className)), id: id, style: { width: width } },
              _react2.default.createElement(
                'div',
                { className: 'ari-ui-modal-header' },
                _react2.default.createElement(
                  'span',
                  { className: 'ari-ui-modal-title' },
                  title && title
                ),
                closeable && _react2.default.createElement(_fa.FaTimes, { className: 'ari-ui-modal-x', onClick: onClose })
              ),
              title && _react2.default.createElement(_Divider2.default, null),
              _react2.default.createElement(
                'div',
                { className: 'ari-ui-modal-content' },
                children
              ),
              footer && _react2.default.createElement(_Divider2.default, null),
              footer ? _react2.default.createElement(
                'div',
                { className: 'ari-ui-modal-footer' },
                footer
              ) : null
            )
          )
        ), document.getElementById('modal-root'));
      }
      return null;
    }
  }]);

  return Modal;
}(_react.Component);

Modal.defaultProps = {
  clickMaskToClose: false,
  closeable: true,
  footer: null
};


Modal.propTypes = {
  /**
   * CSS class(es) applied to Modal.
   */
  className: _propTypes2.default.string,
  /**
   * Determines whether or not clicking the mask closes Modal.
   */
  clickMaskToClose: _propTypes2.default.bool,
  /**
   * Determines whether or not close "x" appears in top-right corner.
   */
  closeable: _propTypes2.default.bool,
  /**
   * Modal footer content.
   */
  footer: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  /**
   * CSS id applied to Modal.
   */
  id: _propTypes2.default.string,
  /**
   * Callback triggered when 'x' is clicked or, if clickMaskToClose=true, mask is clicked.
   */
  onClose: _propTypes2.default.func.isRequired,
  /**
   * Title of Modal.
   */
  title: _propTypes2.default.string,
  /**
   * Determines whether or not Modal is visible.
   */
  visible: _propTypes2.default.bool,
  /**
   * Width of Modal.
   */
  width: _propTypes2.default.number
};

exports.default = Modal;