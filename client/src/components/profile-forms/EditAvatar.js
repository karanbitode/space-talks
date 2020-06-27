import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editAvatar, deleteAvatar } from '../../actions/profile';
// import GetAvatar from '../layout/GetAvatar'
const EditAvatar = ({ editAvatar, history, deleteAvatar}) => {
  const [formData, setFormData] = useState({
    avatar: ''
  });

  const {
    avatar
  } = formData;

  const onChange = e => {
    // console.log(e.target.files[0])
    setFormData({ avatar: e.target.files[0] });
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Your Avatar</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Use any of you'r Picture
      </p>
      {/* <small>*  required field</small> */}
      {/* <GetAvatar avatarForId={_id} avatar={avatar} ></GetAvatar> */}
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          // console.log(avatar)
          if(avatar)
          {
            const formData1 = new FormData()
            formData1.append('avatar', avatar)
            // console.log(formData1)
            editAvatar(formData1, history);
          }          
        }}
      >

        {/* Show Image here */}

        <div className="form-group">
          <input
            className='custom-file-input btn btn-primary my-1 '
            style={{content:'Select Image',cursor:'pointer'}}
            type="file"
            placeholder="Select Image"
            name="avatar"
            // value={avatar}
            onChange={onChange}
          />
        </div>
        <input value="Upload" type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
      <br></br>
      <br></br>
      {/* <br></br> */}
      <button 
        className="btn btn-danger my-1" 
        
        onClick={ () => deleteAvatar()}>
            Delete Avatar
      </button>
    </Fragment>
  );
};

EditAvatar.propTypes = {
    editAvatar: PropTypes.func.isRequired,
    deleteAvatar: PropTypes.func.isRequired
};

export default connect(null, { editAvatar, deleteAvatar })(EditAvatar);
