import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import axios from 'axios';
// import api from '../../utils/api';
// import getAvatar from '../../actions/profile';
import GetAvatar from '../layout/GetAvatar'

const ProfileItem = ({
  profile: {
    user: { _id, name },
    avatar,
    status,
    company,
    location,
    skills
  }
}) => {
  // const avatarRequest = (user_id) => {
  //   try {
  //     return (!avatar) ? <img src={'/default-avatar.png'} alt='' className='round-img-default'/> :
  //       <img src={`http://localhost:5000/api/profile/avatar/${user_id}`} alt='' className='round-img' />
  //   } 
  //   catch (error) {
  //     console.log(error)
  //   }
  // }  
  return (
    <div className='profile bg-light karan-profile-item'>
      {/* <img src={(avatar) ? avatar : '/default-avatar.png'} alt='' className='round-img' /> */}
      {/* <img className='round-img' src={(avatar) ? `data:image/jpg;base64,${avatar.data.toString('base64')}` : '/default-avatar.png'} alt='' /> */}
      {/* <img src={'http://localhost:5000/api/profile/avatar/5ee9c6a4889ad42b803b178d'} alt='' className='round-img' /> */}
      {/* {avatarRequest(_id)} */}
      <GetAvatar avatarForId={_id} avatar={avatar} ></GetAvatar>
      {/* <img className='round-img' src={avatarRequest(_id)} alt='' /> */}
      {/* <img className='round-img' src={getAvatar(_id)} alt='' /> */}
      <div>
        <h2 style={{ fontSize:'3rem' }}>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>From {location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <div>
        Hobbies
        <ul>
          {skills.slice(0, 4).map((skill, index) => (
            <li key={index} className='text-primary'>
              {/* <i className='fas fa-check' />  */}
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
