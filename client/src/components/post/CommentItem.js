import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';
import GetAvatar from '../layout/GetAvatar' 

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => (
  <div className='post bg-white p-1 my-1 karan-profile-item'>
    <div>
      <Link to={`/profile/${user}`}>
      {/* {(!avatar)?<img src={'/default-avatar.png'} alt='' className='round-img-default'/>:<img src={`http://localhost:5000/api/profile/avatar/${user}`} alt='' className='round-img-default'/>} */}
      <GetAvatar avatarForId={user} avatar={avatar} ></GetAvatar>
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className='my-1 wrap'>{text}</p>
      <p className='post-date'>
        Commented on <Moment format='DD/MM/YYYY'>{date}</Moment>
      </p>
      {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deleteComment(postId, _id)}
          type='button'
          className='btn btn-danger'
        >
          <i className='fas fa-times' />
        </button>
      )}
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
