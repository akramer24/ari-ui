import React from 'react';
import classNames from 'classnames';

const withForm = Component =>
  ({ label, labelPosition, style, ...rest }) => {
    let width = null;
    let maxWidth = null;

    if (style) {
      width = style.width;
      maxWidth = style.maxWidth;
      delete style.width;
      delete style.maxWidth;
    }

    return (
      <div
        className={classNames(
          'ari-ui-form-item',
          {
            'ari-ui-form-item-with-label-left': labelPosition === 'left',
            'ari-ui-form-item-with-label-top': !labelPosition || labelPosition === 'top'
          }
        )}
        style={{ width, maxWidth }}
      >
        {label && <div className="ari-ui-form-item-label">{label}:&nbsp;</div>}
        <Component {...rest} style={style} />
      </div>
    )
  }

export default withForm;