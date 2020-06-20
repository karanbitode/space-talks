import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <div className='karan-center-page'>
      <img style={{width:'200px'}} className='round-img my-1' src={'/default-avatar.png'} alt='' />
        <h1 className='x-large text-primary'>
          Karan Bitode
        </h1>
        <p className='large'>I am Student at 
        <br></br> Maulana Azad National Institute of Technology</p>
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
