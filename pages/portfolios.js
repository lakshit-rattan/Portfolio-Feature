import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class Portfolios extends React.Component {
  render() {
    const {appProps} = this.props;
    return (
      <BaseLayout>
      <h1 className='customClass'>This is the Portfolios Page</h1>
      <h2>{appProps}</h2>
      </BaseLayout>
    )
  }
}

export default Portfolios;