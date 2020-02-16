import React from 'react';

import flexboxLayoutItemsStyle from '../styles/flexboxLayoutItemsStyle';
import toKey from '../utils/toKey';

const FlexboxItem = (props) => {

  let styles = {};

  for (const key in props) {
    if (key !== 'children') {
      if (typeof props[key] === 'number') {
        let style = flexboxLayoutItemsStyle[key];
        style[key] = props[key];
        styles = Object.assign({}, styles, style);
      } else {
        styles = Object.assign({}, styles, flexboxLayoutItemsStyle[`${key}${toKey(props[key])}`]);
      }
    }
  }

  console.log('2111111111111111111111');
  console.log(styles);
  console.log('1111111111111111111111');

  return (
    <div style={styles}>
      {props.children}
    </div>
  );
}

export default FlexboxItem;
