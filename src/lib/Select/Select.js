import React from 'react';
import {
  FaAngleDown
} from 'react-icons/fa';
import uniqid from 'uniqid';
import classNames from 'classnames';
import Input from '../Input/Input';
import Dropdown from './Dropdown';

class Select extends React.Component {
  static defaultProps = {
    searchable: true,
    value: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      activeChoiceIndex: 0,
      filteredChoices: props.choices,
      isDropdownVisible: false,
      value: props.value
    };

    this.id = uniqid();
    this.dropdownId = `ari-ui-dropdown-${uniqid()}`;
    const div = document.createElement('div');
    div.id = this.dropdownId;
    document.querySelector('body').appendChild(div);

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleHoverChoice = this.handleHoverChoice.bind(this);
    this.handleSelectChoice = this.handleSelectChoice.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.handleCaretClick = this.handleCaretClick.bind(this);

    this.inputRef = React.createRef();
    this.choiceHeight = 24;
    this.maxToShow = 10;
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    const modalDiv = document.getElementById(this.dropdownId);
    modalDiv.remove();
    window.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside(evt) {
    if (this.state.isDropdownVisible && !evt.path.includes(document.getElementById(this.id))) {
      this.setState({ isDropdownVisible: false }, () => this.inputRef.current.blur());
    }
  }

  handleFocus() {
    this.setState({ isDropdownVisible: true, activeChoiceIndex: 0 });
  }

  handleHoverChoice(idx) {
    this.setState({ activeChoiceIndex: idx });
  }

  handleSelectChoice() {
    const { activeChoiceIndex, filteredChoices } = this.state;
    this.setState({
      value: filteredChoices[activeChoiceIndex],
      isDropdownVisible: false
    }, () => this.inputRef.current.blur());
  }

  handleInputChange(evt) {
    const value = evt.target.value;
    const newState = { value, activeChoiceIndex: 0 };
    if (this.props.searchable) {
      newState.filteredChoices =
        value.length <= this.state.value.length
          ? Select.filterChoices(this.props.choices, value)
          : Select.filterChoices(this.state.filteredChoices, value);
      const dropdown = document.querySelector(`#${this.dropdownId} .ari-ui-dropdown`);
      dropdown.scrollTop = 0;
    }
    this.setState(newState);
  }

  handleInputKeyDown(evt) {
    const { activeChoiceIndex, filteredChoices } = this.state;
    if (evt.keyCode === 40) {
      // Down arrow
      evt.preventDefault();
      evt.stopPropagation();
      if (activeChoiceIndex !== filteredChoices.length - 1) {
        const dropdown = document.querySelector(`#${this.dropdownId} .ari-ui-dropdown`);
        this.setState(
          state => ({ activeChoiceIndex: state.activeChoiceIndex + 1 }),
          () => {
            if (this.state.activeChoiceIndex >= this.maxToShow) {
              dropdown.scrollTop += this.choiceHeight;
            }
          }
        );
      }
    } else if (evt.keyCode === 38) {
      // Up arrow
      evt.preventDefault();
      evt.stopPropagation();
      if (activeChoiceIndex !== 0) {
        const dropdown = document.querySelector(`#${this.dropdownId} .ari-ui-dropdown`);
        this.setState(
          state => ({ activeChoiceIndex: state.activeChoiceIndex - 1 }),
          () => {
            if (this.state.activeChoiceIndex >= this.maxToShow - 1) {
              dropdown.scrollTop -= this.choiceHeight;
            }
          }
        );
      }
    } else if (evt.keyCode === 13) {
      // Enter
      this.handleSelectChoice();
    } else if (evt.keyCode === 9 || evt.keyCode === 27) {
      // Tab/Esc
      this.setState({ isDropdownVisible: false }, () => this.inputRef.current.blur());
    }
  }

  handleCaretClick() {
    this.setState(
      state => ({ isDropdownVisible: !state.isDropdownVisible, activeChoiceIndex: 0 }),
      () => {
        this.state.isDropdownVisible ? this.inputRef.current.focus() : this.inputRef.current.blur();
      }
    );
  }

  static filterChoices(choices, value) {
    return choices.filter(c => c.toLowerCase().includes(value.toLowerCase()));
  }

  render() {
    const { activeChoiceIndex, filteredChoices, isDropdownVisible, value } = this.state;

    return (
      <div id={this.id} className="ari-ui-select-container">
        <Input
          className="ari-ui-dropdown-parent"
          onChange={this.handleInputChange}
          onFocus={this.handleFocus}
          onKeyDown={this.handleInputKeyDown}
          ref={this.inputRef}
          suffix={<FaAngleDown
            className={
              classNames(
                'ari-ui-select-caret',
                {
                  'ari-ui-select-caret-open': isDropdownVisible,
                  'ari-ui-select-caret-closed': !isDropdownVisible
                }
              )
            }
            onClick={this.handleCaretClick}
          />}
          value={value}
        />
        {
          isDropdownVisible
            ? (
              <Dropdown
                activeChoiceIndex={activeChoiceIndex}
                choices={filteredChoices}
                handleHoverChoice={this.handleHoverChoice}
                handleSelectChoice={this.handleSelectChoice}
                id={this.dropdownId}
                parentId={this.id}
              />
            )
            : null
        }
      </div>
    )
  }
}

export default Select;