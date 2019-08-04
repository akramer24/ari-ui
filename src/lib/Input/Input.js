import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withForm from '../../hocs/withForm';

const Input = React.forwardRef(({
  className,
  error,
  id,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  placeholder,
  suffix,
  style,
  type,
  value
}, ref) => {

  return (
    <div
      className={classNames(
        'ari-ui-input-container',
        {
          [className]: className
        }
      )}
      id={id}
      style={style}
    >
      <input
        autoComplete="off"
        className={classNames('ari-ui-input', { 'input-field-error': error })}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        ref={ref}
        type={type}
        value={value}
      />
      {
        suffix
          ? <div className="ari-ui-input-suffix">{suffix}</div>
          : null
      }
      {
        error
          ? <p className="ari-ui-input-error">{error}</p>
          : null
      }
    </div>
  )
})

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
   * Callback triggered on blur.
   */
  onBlur: PropTypes.func,
  /**
   * Callback triggered on typing.
   */
  onChange: PropTypes.func,
  /**
   * Callback triggered on focus.
   */
  onFocus: PropTypes.func,
  /**
   * Placeholder text.
   */
  placeholder: PropTypes.string,
  /**
   * Node attached to end of Input.
   */
  suffix: PropTypes.node,
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

export default withForm(Input);