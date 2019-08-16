import React from 'react';
import classNames from 'classnames';
import { omitBy, isUndefined } from 'lodash';
import withForm from '../../hocs/withForm';

const Checkbox = ({
  autoFocus,
  checked,
  className,
  defaultChecked,
  id,
  name,
  onChange,
  required,
}) => {
  const passthroughToCheckbox = omitBy({ checked, id, name, onChange }, isUndefined);

  return (
    <input
      autoFocus={autoFocus}
      className={classNames('ari-ui-checkbox', { [className]: className })}
      defaultChecked={defaultChecked}
      required={required}
      type="checkbox"
      {...passthroughToCheckbox}
    />
  )
}

Checkbox.defaultProps = {
  defaultChecked: false
}

export default withForm(Checkbox);