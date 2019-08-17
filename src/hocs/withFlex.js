import React from 'react';
import classNames from 'classnames';

const withFlex = (Component, direction) => ({
  children,
  horizontalAlignment,
  style,
  verticalAlignment,
  wrap
}) => {
  let horizontalAlignmentClass;

  switch (horizontalAlignment) {
    case 'center':
      horizontalAlignmentClass = direction === 'row' ? 'justify-center' : 'align-center';
      break;
    case 'top':
      horizontalAlignmentClass = 'align-start';
      break;
    case 'bottom':
      horizontalAlignmentClass = 'align-end';
      break;
    case 'left':
      horizontalAlignmentClass = 'justify-start';
      break;
    case 'right':
      horizontalAlignmentClass = 'justify-end';
      break;
    case 'space-evenly':
      horizontalAlignmentClass = direction === 'row' ? 'justify-even' : 'align-even';
      break;
    case 'space-between':
      horizontalAlignmentClass = direction === 'row' ? 'justify-between' : 'align-between';
      break;
    case 'space-around':
      horizontalAlignmentClass = direction === 'row' ? 'justify-around' : 'align-around';
      break;
    default:
      horizontalAlignmentClass = direction === 'row' ? 'justify-start' : 'align-start';
  }

  let verticalAlignmentClass;

  switch (verticalAlignment) {
    case 'top':
      verticalAlignmentClass = 'align-start';
      break;
    case 'bottom':
      verticalAlignmentClass = 'align-end';
      break;
    case 'left':
      verticalAlignmentClass = 'justify-left';
      break;
    case 'right':
      verticalAlignmentClass = 'justify-right';
      break;
    case 'space-evenly':
      verticalAlignmentClass = direction === 'row' ? 'align-even' : 'justify-even';
      break;
    case 'space-between':
      verticalAlignmentClass = direction === 'row' ? 'align-between' : 'justify-between';
      break;
    case 'space-around':
      verticalAlignmentClass = direction === 'row' ? 'align-around' : 'justify-around';
      break;
    default:
      verticalAlignmentClass = direction === 'row' ? 'align-center' : 'justify-start';
  }

  return (
    <Component
      className={classNames(
        horizontalAlignmentClass,
        verticalAlignmentClass,
        {
          'flex-row': direction === 'row',
          'flex-column': direction === 'column',
          wrap
        }
      )}
      style={style}
    >
      {children}
    </Component>
  )
}

export default withFlex;