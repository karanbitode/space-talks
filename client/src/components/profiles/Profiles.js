import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import {  getProfiles } from '../../actions/profile';
// import { useHistory } from "react-router-dom";



const Profiles = ({getProfiles, profile: {  profiles, loading } }) => {
  // useEffect(() => {   
  //   console.log('useEffect') 
  //   getCurrentProfile();
  // }, [getCurrentProfile]);
  useEffect(() => {
    // getCurrentProfile();
    getProfiles();
  }, [ getProfiles ]);

  // const history = useHistory();
  // const goDashboard = () => history.push('dashboard');

  // console.log(profile, profiles)
  // if(!profile)
  // {
  //   console.log('go to dashboard');
  //   // goDashboard();
  // }

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Profiles of Users</h1>
          <p className='lead'>
            Browse and connect with Users
          </p>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  // getCurrentProfile: PropTypes.func.isRequired,
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
