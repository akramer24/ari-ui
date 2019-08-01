import React from 'react';
import {
  FaAngleDown
} from 'react-icons/fa';
import uniqid from 'uniqid';
import Input from '../Input/Input';
import Dropdown from './Dropdown';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownVisible: false
    };

    this.id = uniqid();
    this.dropdownId = `ari-ui-dropdown-${uniqid()}`;
    const div = document.createElement('div');
    div.id = this.dropdownId;
    document.querySelector('body').appendChild(div);

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentWillUnmount() {
    const modalDiv = document.getElementById(this.dropdownId);
    modalDiv.remove();
  }

  toggleDropdown(evt) {
    this.setState({ isDropdownVisible: evt.type === 'focus' });
  }

  render() {
    const { choices } = this.props;
    const { isDropdownVisible } = this.state;

    return (
      <div id={this.id} className="ari-ui-select-container">
        <Input
          onBlur={this.toggleDropdown}
          onFocus={this.toggleDropdown}
          suffix={<FaAngleDown />}
        />
        {
          isDropdownVisible
            ? <Dropdown choices={choices} id={this.dropdownId} parentId={this.id} />
            : null
        }
      </div>
    )
  }
}

export default Select;