import React from 'react';

import flexboxLayoutStyle from '../styles/FlexboxLayoutStyle';

const FlexboxItem = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default FlexboxItem;
