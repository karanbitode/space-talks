import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      {/* <div className='dark-overlay'> */}
        <div className='landing-inner'>
          <h1 className='x-large'>
            <div className="glitch" data-text="SPACE_TALKS">SPACE_TALKS</div>
            {/* <div class="glitch" data-text="TALKS">TALKS</div> */}
          </h1>
          <p className='lead'>            
            Space For Everyone !
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Register
            </Link>
            <Link to='/login' className='btn btn-primary'>
              {' '}Login{' '}
            </Link>
          </div>
          {/* <div class="glitch" data-text="GLITCH">GLITCH</div> */}
        </div>
      {/* </div> */}
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
