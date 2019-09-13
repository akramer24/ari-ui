'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fa = require('react-icons/fa');

var _uniqid = require('uniqid');

var _uniqid2 = _interopRequireDefault(_uniqid);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withForm = require('../hocs/withForm');

var _withForm2 = _interopRequireDefault(_withForm);

var _Input = require('../Input/Input');

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.state = {
      activeChoiceIndex: 0,
      filteredChoices: props.choices,
      isDropdownVisible: false,
      value: props.value
    };

    _this.id = (0, _uniqid2.default)();
    _this.dropdownId = 'ari-ui-dropdown-' + (0, _uniqid2.default)();
    var div = document.createElement('div');
    div.id = _this.dropdownId;
    document.querySelector('body').appendChild(div);

    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleHoverChoice = _this.handleHoverChoice.bind(_this);
    _this.handleSelectChoice = _this.handleSelectChoice.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleInputKeyDown = _this.handleInputKeyDown.bind(_this);
    _this.handleCaretClick = _this.handleCaretClick.bind(_this);

    _this.inputRef = _react2.default.createRef();
    _this.choiceHeight = 24;
    _this.maxToShow = 10;
    return _this;
  }

  _createClass(Select, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('click', this.handleClickOutside);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalDiv = document.getElementById(this.dropdownId);
      modalDiv.remove();
      window.removeEventListener('click', this.handleClickOutside);
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(evt) {
      var _this2 = this;

      if (this.state.isDropdownVisible && !evt.path.includes(document.getElementById(this.id))) {
        this.setState({ isDropdownVisible: false }, function () {
          return _this2.inputRef.current.blur();
        });
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      !this.props.searchable && this.inputRef.current.blur();
      this.setState({ isDropdownVisible: true, activeChoiceIndex: 0 });
    }
  }, {
    key: 'handleHoverChoice',
    value: function handleHoverChoice(idx) {
      this.setState({ activeChoiceIndex: idx });
    }
  }, {
    key: 'handleSelectChoice',
    value: function handleSelectChoice() {
      var _this3 = this;

      var _state = this.state,
          activeChoiceIndex = _state.activeChoiceIndex,
          filteredChoices = _state.filteredChoices;

      this.setState({
        value: filteredChoices[activeChoiceIndex],
        isDropdownVisible: false
      }, function () {
        return _this3.inputRef.current.blur();
      });
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(evt) {
      var value = evt.target.value;
      var newState = { value: value, activeChoiceIndex: 0 };
      if (this.props.searchable) {
        newState.filteredChoices = value.length <= this.state.value.length ? Select.filterChoices(this.props.choices, value) : Select.filterChoices(this.state.filteredChoices, value);
        var dropdown = document.querySelector('#' + this.dropdownId + ' .ari-ui-dropdown');
        dropdown.scrollTop = 0;
      }
      this.setState(newState);
      this.props.onChange && this.props.onChange(evt);
    }
  }, {
    key: 'handleInputKeyDown',
    value: function handleInputKeyDown(evt) {
      var _this4 = this;

      var _state2 = this.state,
          activeChoiceIndex = _state2.activeChoiceIndex,
          filteredChoices = _state2.filteredChoices;

      if (evt.keyCode === 40) {
        // Down arrow
        evt.preventDefault();
        evt.stopPropagation();
        if (activeChoiceIndex !== filteredChoices.length - 1) {
          var dropdown = document.querySelector('#' + this.dropdownId + ' .ari-ui-dropdown');
          this.setState(function (state) {
            return { activeChoiceIndex: state.activeChoiceIndex + 1 };
          }, function () {
            if (_this4.state.activeChoiceIndex >= _this4.maxToShow) {
              dropdown.scrollTop += _this4.choiceHeight;
            }
          });
        }
      } else if (evt.keyCode === 38) {
        // Up arrow
        evt.preventDefault();
        evt.stopPropagation();
        if (activeChoiceIndex !== 0) {
          var _dropdown = document.querySelector('#' + this.dropdownId + ' .ari-ui-dropdown');
          this.setState(function (state) {
            return { activeChoiceIndex: state.activeChoiceIndex - 1 };
          }, function () {
            if (_this4.state.activeChoiceIndex >= _this4.maxToShow - 1) {
              _dropdown.scrollTop -= _this4.choiceHeight;
            }
          });
        }
      } else if (evt.keyCode === 13) {
        // Enter
        this.handleSelectChoice();
      } else if (evt.keyCode === 9 || evt.keyCode === 27) {
        // Tab/Esc
        this.setState({ isDropdownVisible: false }, function () {
          return _this4.inputRef.current.blur();
        });
      }
    }
  }, {
    key: 'handleCaretClick',
    value: function handleCaretClick() {
      var _this5 = this;

      this.setState(function (state) {
        return { isDropdownVisible: !state.isDropdownVisible, activeChoiceIndex: 0 };
      }, function () {
        _this5.state.isDropdownVisible ? _this5.inputRef.current.focus() : _this5.inputRef.current.blur();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state3 = this.state,
          activeChoiceIndex = _state3.activeChoiceIndex,
          filteredChoices = _state3.filteredChoices,
          isDropdownVisible = _state3.isDropdownVisible,
          value = _state3.value;
      var _props = this.props,
          placeholder = _props.placeholder,
          searchable = _props.searchable;


      return _react2.default.createElement(
        'div',
        { id: this.id, className: 'ari-ui-select-container' },
        _react2.default.createElement(_Input.Input, {
          className: (0, _classnames2.default)('ari-ui-dropdown-parent', {
            'ari-ui-non-searchable-select-input': !searchable
          }),
          onChange: this.handleInputChange,
          onFocus: this.handleFocus,
          onKeyDown: this.handleInputKeyDown,
          placeholder: placeholder,
          ref: this.inputRef,
          suffix: _react2.default.createElement(_fa.FaAngleDown, {
            className: (0, _classnames2.default)('ari-ui-select-caret', {
              'ari-ui-select-caret-open': isDropdownVisible,
              'ari-ui-select-caret-closed': !isDropdownVisible
            }),
            onClick: this.handleCaretClick
          }),
          value: value
        }),
        isDropdownVisible ? _react2.default.createElement(_Dropdown2.default, {
          activeChoiceIndex: activeChoiceIndex,
          choices: filteredChoices,
          handleHoverChoice: this.handleHoverChoice,
          handleSelectChoice: this.handleSelectChoice,
          id: this.dropdownId,
          parentId: this.id
        }) : null
      );
    }
  }], [{
    key: 'filterChoices',
    value: function filterChoices(choices, value) {
      return choices.filter(function (c) {
        return c.toLowerCase().includes(value.toLowerCase());
      });
    }
  }]);

  return Select;
}(_react2.default.Component);

Select.defaultProps = {
  choices: [],
  placeholder: 'Select',
  searchable: true,
  value: ''
};


Select.propTypes = {
  /**
   * Choices that populate dropdown.
   */
  choices: _propTypes2.default.arrayOf(_propTypes2.default.string),
  /**
   * Placeholder text.
   */
  placeholder: _propTypes2.default.string,
  /**
   * If true, typing into input will filter choices.
   */
  searchable: _propTypes2.default.bool,
  /**
   * Value of Select.
   */
  value: _propTypes2.default.string
};

exports.default = (0, _withForm2.default)(Select);