import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      { (loading) ? <Spinner/> :
      (!loading && profile !== null  ? (
        <Fragment>
          {/* <div className='dash-buttons'> */}
            <Link to={`/profile/${profile.user._id}`} className='btn btn-primary'>
              View Full Profile
            </Link>
            <Link to='/edit-profile' className='btn btn-primary'>
              <i className='fas fa-user-circle text-dark' /> Edit Profile
            </Link>
            <Link to='/edit-avatar' className='btn btn-primary'>
              <i className='fas fa-user-circle text-dark' /> Edit Avatar
            </Link> 
            
          {/* </div> */}

          <Education education={profile.education} />
          <Link to='/add-education' className='btn btn-primary'>
              <i className='fas fa-graduation-cap text-dark' /> Add Education
          </Link>
          
          <Experience experience={profile.experience} />
          <Link to='/add-experience' className='btn btn-primary'>
              <i className='fab fa-black-tie text-dark' /> Add Experience
          </Link>

          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        (!loading && profile === null) ?
        <Fragment>
          <p>You have not yet setup a profile, please Create Profile to use all Features</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
        : <Fragment/>
      ))
      }
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
