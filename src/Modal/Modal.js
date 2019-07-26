import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { FaTimes } from 'react-icons/fa';

class Modal extends Component {
  constructor(props) {
    super(props);
    const div = document.createElement('div');
    div.id = 'modal-root';
    document.querySelector('body').appendChild(div);
  }

  componentWillUnmount() {
    const modalDiv = document.getElementById('modal-root');
    modalDiv.remove();
  }

  render() {
    const { children, className, onClose, title } = this.props;
    return ReactDOM.createPortal(
      <div className="modal-container">
        <div className="modal-overlay" onClick={onClose} />
        <div className="modal-dialog">
          <div className={classNames('modal', { [className]: className })}>
            <div className="modal-header">
              <span className="modal-title">{title}</span>
              <FaTimes className="modal-x" onClick={onClose} />
            </div>
            <div className="divider" />
            {children}
          </div>
        </div>
      </div>,
      document.getElementById('modal-root')
    )
  }
}

export default Modal;