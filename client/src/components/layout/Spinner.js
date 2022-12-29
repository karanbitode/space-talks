import React, { Fragment } from 'react';
// import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <img
      // src={spinner}
      src="/spinner.gif"
      // style={{ width: '100px', margin: '100px auto', display: 'block' }}
      style={{ width: '150px', margin: '150px auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
