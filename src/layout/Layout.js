import React from 'react';
import test from '../theme/DefaultTheme';

const Layout = (props) => {
  return (
    <div style={test.test}>
      {props.children}
    </div>
  );
}

export default Layout;
