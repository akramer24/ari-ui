import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { omitBy, isUndefined } from 'lodash';

const Button = ({
  children,
  className,
  disabled,
  edge,
  id,
  onClick,
  style,
  type,
}) => {
  const passthroughToButton = omitBy({
    onClick,
    style
  }, isUndefined);

  let typeClassName;
  switch (type) {
    case 'primary':
      typeClassName = 'ari-ui-btn-primary';
      break;
    case 'danger':
      typeClassName = 'ari-ui-btn-danger';
      break;
    default:
      typeClassName = 'ari-ui-btn-default';
  }

  return (
    <button
      {...passthroughToButton}
      className={classNames(
        'ari-ui-btn',
        typeClassName,
        {
          [className]: className,
          'ari-ui-btn-disabled': disabled,
          'ari-ui-btn-rounded-edge': edge === 'round'
        }
      )}
      id={id}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  edge: 'straight',
  type: 'default'
}

Button.propTypes = {
  /**
   * Content inside Button.
   */
  children: PropTypes.string.isRequired,
  /**
   * CSS class(es) applied to Button.
   */
  className: PropTypes.string,
  /**
   * Determines whether or not Button is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Determines whether Button takes a straight or round edge.
   */
  edge: PropTypes.oneOf(['straight', 'round']),
  /**
   * CSS id applied to Button.
   */
  id: PropTypes.string,
  /**
   * Callback triggered by clicking Button.
   */
  onClick: PropTypes.func,
  /**
   * CSS styling applied to Button.
   */
  style: PropTypes.object,
  /**
   * Button type.
   */
  type: PropTypes.oneOf(['default', 'primary', 'danger']),
}

export default Button;