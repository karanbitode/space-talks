import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/profiles'>Users</Link>
      </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          {/* <i className='fas fa-user' />{' '} */}
          {/* <span className='hide-sm'>Dashboard</span> */}
          Dashboard
        </Link>
      </li>
      <li>
        <Link onClick={logout} to='/'>
          {/* <i className='fas fa-sign-out-alt' />{' '} */}
          {/* <span className='hide-sm'>Logout</span> */}
          Logout
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (    
    <div>
      {/* <div class=""></div> */}
      <nav className='navbar bg-dark karan-navbar'>
        
        <h1 className='karan-text-size-logo'>
          <Link to='/'>
            {/* <i className='fas fa-code' /> */}
            {/* <img className='navbar-logo' src='/logo.png' alt='' ></img> */}
            Space Talks
          </Link>
        </h1>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
