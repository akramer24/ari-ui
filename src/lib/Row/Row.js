import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Row = ({
  children,
  horizontalAlignment,
  verticalAlignment,
  wrap
}) => {
  let horizontalAlignmentClass;

  switch (horizontalAlignment) {
    case 'center':
      horizontalAlignmentClass = 'justify-center';
      break;
    case 'right':
      horizontalAlignmentClass = 'justify-end';
      break;
    case 'space-evenly':
      horizontalAlignmentClass = 'justify-even';
      break;
    case 'space-between':
      horizontalAlignmentClass = 'justify-between';
      break;
    case 'space-around':
      horizontalAlignmentClass = 'justify-around';
      break;
    default:
      horizontalAlignmentClass = 'justify-start';
  }

  let verticalAlignmentClass;

  switch (verticalAlignment) {
    case 'top':
      verticalAlignmentClass = 'align-start';
      break;
    case 'bottom':
      verticalAlignmentClass = 'align-end';
      break;
    case 'space-evenly':
      verticalAlignmentClass = 'align-even';
      break;
    case 'space-between':
      verticalAlignmentClass = 'align-between';
      break;
    case 'space-around':
      verticalAlignmentClass = 'align-around';
      break;
    default:
      verticalAlignmentClass = 'align-center';
  }

  return (
    <div
      className={classNames(
        'flex-row',
        horizontalAlignmentClass,
        verticalAlignmentClass,
        {
          wrap
        }
      )}
    >
      {children}
    </div>
  )
}

Row.defaultProps = {
  horizontalAlignment: 'left',
  verticalAlignment: 'center',
  wrap: true
}

Row.propTypes = {
  /**
   * Row content.
   */
  children: PropTypes.array,
  /**
   * Determines how row content is aligned horizontally.
   */
  horizontalAlignment: PropTypes.oneOf(['center', 'left', 'right', 'space-evenly', 'space-between', 'space-around']),
  /**
   * Determines how row content is aligned vertically.
   */
  verticalAlignment: PropTypes.oneOf(['center', 'top', 'bottom', 'space-evenly', 'space-between', 'space-around']),
  /**
   * Determines whether content should wrap when it does not fit on screen.
   */
  wrap: PropTypes.bool
}

export default Row;