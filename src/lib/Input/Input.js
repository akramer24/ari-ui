import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withForm from '../../hocs/withForm';

const Input = React.forwardRef(({
  className,
  disabled,
  id,
  name,
  onBlur,
  onChange,
  onClick,
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
        className="ari-ui-input"
        disabled={disabled}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onClick={onClick}
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
   * Determines whether or not Input is disabled.
   */
  disabled: PropTypes.bool,
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

export { Input };
export default withForm(Input);