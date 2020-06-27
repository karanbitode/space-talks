import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';
import { getCurrentProfile } from '../../actions/profile';
// import profile from '../../reducers/profile';
// import { useHistory } from "react-router-dom";

const Posts = ({ getPosts, post: { posts }, getCurrentProfile, profile:{ profile } }) => {
  useEffect(() => {    
    getCurrentProfile();
  }, [getCurrentProfile]);
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  // const history = useHistory();
  // const goDashboard = () => history.push('dashboard');

  // console.log(profile)
  // if(!profile)
  // {
  //   console.log('go to dashboard');
  //   goDashboard();
  // }

  return (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome to the community
      </p>
      <PostForm profile={profile} />
      <p className="lead">
        Recent Posts
      </p>
      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  profile: state.profile
});

export default connect(mapStateToProps, { getPosts, getCurrentProfile })(Posts);
