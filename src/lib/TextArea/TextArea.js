import React from 'react';
import classNames from 'classnames';
import { omitBy, isUndefined } from 'lodash';
import withForm from '../../hocs/withForm';

const TextArea = ({
  children,
  name,
  resizable,
  rows,
  style
}) => {
  const passthroughToTextArea = omitBy({
    name
  }, isUndefined);

  return (
    <div className="ari-ui-text-area-container" style={style}>
      <textarea
        {...passthroughToTextArea}
        className={classNames(
          'ari-ui-text-area',
          {
            'ari-ui-text-area-no-resize': resizable === false
          }
        )}
        rows={rows}
      >
        {children}
      </textarea>
    </div>
  )
}

TextArea.defaultProps = {
  resizable: true,
  rows: 4
}

export default withForm(TextArea);