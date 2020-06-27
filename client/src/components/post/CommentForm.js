import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment, msg1 } from '../../actions/post';

const CommentForm = ({ postId, addComment, profile, msg1 }) => {
  const [text, setText] = useState('');

  return (
    <div className='post-form karan-new-post'>
      <div style={{borderRadius:'5px'}} className='bg-primary p'>
        <h3>Leave a Comment</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();          
          if(profile)
            {
              addComment(postId, { text });
              setText('');
            }
            else
            {
              msg1()
              // dispatch(setAlert('Create A Profile First', 'danger'));
            } 
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Comment on This Post'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-primary my-1' value='Submit' />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  msg1: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment, msg1 }
)(CommentForm);
