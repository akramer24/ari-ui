import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Column = ({
  children,
  horizontalAlignment,
  style,
  verticalAlignment,
  wrap
}) => {
  let verticalAlignmentClass;

  switch (verticalAlignment) {
    case 'center':
      verticalAlignmentClass = 'justify-center';
      break;
    case 'right':
      verticalAlignmentClass = 'justify-end';
      break;
    case 'space-evenly':
      verticalAlignmentClass = 'justify-even';
      break;
    case 'space-between':
      verticalAlignmentClass = 'justify-between';
      break;
    case 'space-around':
      verticalAlignmentClass = 'justify-around';
      break;
    default:
      verticalAlignmentClass = 'justify-start';
  }

  let horizontalAlignmentClass;

  switch (horizontalAlignment) {
    case 'center':
      horizontalAlignmentClass = 'align-center';
      break;
    case 'bottom':
      horizontalAlignmentClass = 'align-end';
      break;
    case 'space-evenly':
      horizontalAlignmentClass = 'align-even';
      break;
    case 'space-between':
      horizontalAlignmentClass = 'align-between';
      break;
    case 'space-around':
      horizontalAlignmentClass = 'align-around';
      break;
    default:
      horizontalAlignmentClass = 'align-start';
  }

  return (
    <div
      className={classNames(
        'flex-column',
        horizontalAlignmentClass,
        verticalAlignmentClass,
        {
          wrap
        }
      )}
      style={style}
    >
      {children}
    </div>
  )
}

Column.defaultProps = {
  horizontalAlignment: 'left',
  verticalAlignment: 'center',
  wrap: true
}

Column.propTypes = {
  /**
   * Row content.
   */
  children: PropTypes.array,
  /**
   * Determines how row content is aligned horizontally.
   */
  horizontalAlignment: PropTypes.oneOf(['center', 'left', 'right', 'space-evenly', 'space-between', 'space-around']),
  /**
   * Style applied to Column.
   */
  style: PropTypes.object,
  /**
   * Determines how row content is aligned vertically.
   */
  verticalAlignment: PropTypes.oneOf(['center', 'top', 'bottom', 'space-evenly', 'space-between', 'space-around']),
  /**
   * Determines whether content should wrap when it does not fit on screen.
   */
  wrap: PropTypes.bool
}

export default Column;