import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (
  <div style={{ color: 'var(--primary-color)' }}>
    <h3 className="">{company}</h3>
    <p>
      <Moment format="DD/MM/YYYY">{moment.utc(from)}</Moment> -{' '}
      {!to ? ' Now' : <Moment format="DD/MM/YYYY">{moment.utc(to)}</Moment>}
    </p>
    <p>
      <strong style={{ color: 'white' }}>Position: </strong> {title}
    </p>
    <p>
      <strong style={{ color: 'white' }}>Location: </strong> {location}
    </p>
    <p>
      <strong style={{ color: 'white' }}>Description: </strong> {description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
