import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaTimes } from 'react-icons/fa';

class Modal extends Component {
  static defaultProps = {
    clickMaskToClose: false
  }

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
    const {
      children,
      className,
      clickMaskToClose,
      id,
      onClose,
      title,
      visible
    } = this.props;

    if (visible) {
      return ReactDOM.createPortal(
        <div className="modal-container">
          <div className="modal-overlay" onClick={clickMaskToClose ? onClose : () => { }} />
          <div className="modal-dialog">
            <div className={classNames('modal', { [className]: className })} id={id}>
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
    return null;
  }
}

Modal.propTypes = {
  /**
   * CSS class(es) applied to Modal.
   */
  className: PropTypes.string,
  /**
   * Determines whether or not clicking the mask closes Modal.
   */
  clickMaskToClose: PropTypes.bool,
  /**
   * CSS id applied to Modal.
   */
  id: PropTypes.string,
  /**
   * Callback triggered when 'x' is clicked or, if clickMaskToClose=true, mask is clicked.
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Title of Modal.
   */
  title: PropTypes.string,
  /**
   * Determines whether or not Modal is visible.
   */
  visible: PropTypes.bool
}

export default Modal;