import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost, msg1 } from '../../actions/post';

const PostForm = ({ addPost, msg1, profile }) => {
  const [text, setText] = useState('');

  return (
    <div className='post-form karan-new-post '>
      <div style={{borderRadius:'10px'}} className='bg-primary p'>
        <h3>Say Something...</h3>
      </div>
        <form
          className='form my-1'
          onSubmit={e =>  {
            e.preventDefault();
            if(profile)
            {
              addPost({ text });
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
          placeholder='Create a post'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <div >
          {/* Upload Avatar : {' '} */}
          <input
            className='custom-file-input custom-file-input-post-image btn btn-primary my-1 '
            type="file"
            placeholder="Upload Avatar"
            name="avatar"
            // value={avatar}
            // onChange={onChange}
          />
          {/* <small className="form-text">
            Could be your own company or one you work for
          </small> */}
        </div>
        <input type='submit' className='btn btn-primary my-1' value='Submit' />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  msg1: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addPost, msg1 }
)(PostForm);
