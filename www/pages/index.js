import React from 'react';
import { Layout, CardLayout } from 'react-layout-kit';

import 'react-layout-kit/initialize';

export default class Index extends React.Component {
  render() {
    return (
      <>
        <Layout>
          <CardLayout>
            Hello
          </CardLayout>
          <CardLayout>
            Hello
          </CardLayout>
        </Layout>
      </>
    );
  }
}
