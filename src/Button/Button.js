import React from 'react';
import classNames from 'classnames';
import { omitBy, isUndefined } from 'lodash';

const Button = ({
  className,
  disabled,
  id,
  onClick,
  type,
  value
}) => {
  const passthroughToButton = omitBy({
    onClick,
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
  console.log(typeClassName)

  return (
    <button
      {...passthroughToButton}
      className={classNames(
        'ari-ui-btn',
        typeClassName,
        {
          [className]: className
        }
      )}
      id={id}
      disabled={disabled}
    >
      {value}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
}

export default Button;