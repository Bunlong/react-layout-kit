import React from 'react';

import flexboxLayoutContainerStyle from '../styles/FlexboxLayoutContainerStyle';
import toKey from '../utils/toKey';

const FlexboxLayout = (props) => {

  let styles = {};

  for (const key in props) {
    if (key !== 'children') {
      console.log(`${key}${toKey(props[key])}`);
      styles = Object.assign({}, styles, flexboxLayoutContainerStyle[`${key}${toKey(props[key])}`]);
    }
  }

  return (
    <div style={styles}>
      {props.children}
    </div>
  );
}

export default FlexboxLayout;
