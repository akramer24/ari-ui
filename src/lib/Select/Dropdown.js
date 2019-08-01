import React from 'react';
import ReactDOM from 'react-dom';

const Dropdown = ({ choices, id, parentId }) => {
  const getDropdownStyle = () => {
    const parent = document.getElementById(parentId);
    if (parent) {
      const { top, left, height, width } = parent.getBoundingClientRect();
      return { top: top + height - 10, left: left + 10, width: width - 48 };
    }
  }

  return ReactDOM.createPortal(
    <div className="ari-ui-dropdown" style={{ ...getDropdownStyle() }}>
      {
        choices && choices.map(c => <div>{c}</div>)
      }
    </div>,
    document.getElementById(id)
  )
}

export default Dropdown;