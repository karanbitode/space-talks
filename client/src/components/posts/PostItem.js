import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';
import GetAvatar from '../layout/GetAvatar'

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => (
  <div className='post karan-profile-item p-1 my-1'>
    <div>
      <Link to={`/profile/${user}`}>  
        {/* className={`alert alert-${alert.alertType} karan-alert-new-position`} */}
        {/* {(!avatar)?<img src={'/default-avatar.png'} alt='' className='round-img-default'/>:<img src={`http://localhost:5000/api/profile/avatar/${user}`} alt='' className='round-img-default'/>} */}
        <GetAvatar avatarForId={user} avatar={avatar} ></GetAvatar>
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className='my-1 wrap'>{text}</p>
      <p className='post-date'>
        Posted on <Moment format='DD/MM/YYYY'>{date}</Moment>
      </p>

      {showActions && (
        <Fragment>
          <button
            onClick={() => addLike(_id)}
            type='button'
            className='btn btn-success'
          >
            <i className='fas fa-thumbs-up' />{' '}
            <span>{likes.length > 0 && <span className='karan-like-count'>{likes.length}</span>}</span>
          </button>
          <button
            onClick={() => removeLike(_id)}
            type='button'
            className='btn btn-danger'
          >
            <i className='fas fa-thumbs-down' />
          </button>
          <Link to={`/posts/${_id}`} className='btn btn-primary'>
            Discussion{' '}
            {comments.length > 0 && (
              <span className='karan-comment-count'>{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deletePost(_id)}
              type='button'
              className='btn btn-danger'
            >
              <i className='fas fa-times' />
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
