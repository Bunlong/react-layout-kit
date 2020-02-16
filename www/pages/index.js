import React from 'react';
import { FlexboxLayout, FlexboxItem } from 'react-layout-kit';

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
          <FlexboxItem
            order={2}
            flexGrow={10}
            flexShrink={2}
            flexBasis={10}
            alignSelf='auto'
          >
            Hi
          </FlexboxItem>
          <FlexboxItem
            order={1}
            flexGrow={10}
            flexShrink={2}
            flexBasis={10}
            alignSelf='flex-start'
          >
            Hello
          </FlexboxItem>
        </FlexboxLayout>
      </>
    );
  }
}
