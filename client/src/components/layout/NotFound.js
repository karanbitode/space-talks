import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <div className='karan-center-page'>
        <h1 className='x-large text-primary'>
          <i className='fas fa-exclamation-triangle' /> Page Not Found
        </h1>
        <p className='large'>Sorry, this page does not exist</p>
        <br></br>
        <div className='buttons'>
              <Link to='/' className='btn btn-primary'>
                GO HOME
              </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
