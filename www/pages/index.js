import React from 'react';
import { FlexboxLayout } from 'react-layout-kit';

export default class Index extends React.Component {
  render() {
    return (
      <>
        <FlexboxLayout
          display='inline-flex'
          flexDirection='row-reverse'
          flexWrap='wrap'
          justifyContent='space-between'
          alignItems='flex-start'
          alignContent='start'
        >
          <div>
            Hello
          </div>
          <div>
            Hello
          </div>
          <div>
            Hello
          </div>
          <div>
            Hello
          </div>
        </FlexboxLayout>
      </>
    );
  }
}
