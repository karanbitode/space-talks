import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }  
}) => {
  return (
    <div className='profile-top bg-primary p-2 karan-profile-item'>
      <img className='round-img my-1' src={(avatar) ? avatar : '/default-avatar.png'} alt='' />
      <h1 style={{ color: 'var(--primary-color)' }} className='large'>{name}</h1>
      <p style={{ marginBottom:'1rem' }} className='lead'>
        {status} {company && <span> at {company}</span>}
      </p>
      <p style={{ fontSize:'2rem', marginBottom:'1rem' }}>{location && <span><span style={{ fontSize:'1rem', marginBottom:'1rem' }} >From</span><span style={{ color: 'var(--primary-color)' }} > {location}</span></span>}</p>
      <div className='icons my-1'>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe fa-2x' />
          </a>
        )}
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter fa-2x' />
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook fa-2x' />
          </a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin fa-2x' />
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-youtube fa-2x' />
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram fa-2x' />
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
