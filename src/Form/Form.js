import React from 'react';
import classNames from 'classnames';
import uniqid from 'uniqid';

const Form = ({
  columnWidth,
  content,
  direction,
  onSubmit
}) => {
  return (
    <form
      className={classNames(
        'ari-ui-form',
        {
          'ari-ui-form-columns': direction === 'columns',
          'ari-ui-form-rows': direction === 'rows'
        }
      )}
      onSubmit={onSubmit}
    >
      {content.map(group => {
        return (
          <div
            className={classNames({
              'ari-ui-form-row': direction === 'rows', 'ari-ui-form-column': direction === 'columns'
            })}
            key={uniqid()}
          >
            {group.map(el => React.cloneElement(el, { ...el.props, key: uniqid(), style: { maxWidth: columnWidth, width: columnWidth, marginRight: 16 } }))}
          </div>
        )
      })}
    </form>
  )
}

Form.defaultProps = {
  columnWidth: 200,
  content: [],
  direction: 'columns'
}

export default Form;