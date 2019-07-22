import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({
  className,
  error,
  id,
  name,
  onChange,
  placeholder,
  style,
  type,
  value
}) => {

  return (
    <div
      className={classNames(
        'ari-uiinput-container',
        {
          [className]: className
        }
      )}
      id={id}
      style={style}
    >
      <input
        autoComplete="do-not"
        className={classNames('ari-ui-input', { 'input-field-error': error })}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {
        error
          ? <p className="ari-ui-input-error">{error}</p>
          : null
      }
    </div>
  )
}

Input.defaultProps = {
  type: 'text'
}

Input.propTypes = {
  /**
   * CSS class(es) applied to Input.
   */
  className: PropTypes.string,
  /**
   * Error to display.
   */
  error: PropTypes.string,
  /**
   * CSS id applied to Input.
   */
  id: PropTypes.string,
  /**
   * Name of Input.
   */
  name: PropTypes.string,
  /**
   * Callback triggered on typing.
   */
  onChange: PropTypes.func,
  /**
   * Placeholder text.
   */
  placeholder: PropTypes.string,
  /**
   * CSS styling applied to Input.
   */
  style: PropTypes.object,
  /**
   * Input type.
   */
  type: PropTypes.string,
  /**
   * Input value.
   */
  value: PropTypes.string,
}

export default Input;