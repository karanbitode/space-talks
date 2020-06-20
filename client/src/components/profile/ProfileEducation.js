import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
  <div  style={{ color: 'var(--primary-color)'}}>
    <h3 className="">{school}</h3>
    <p>
      <Moment format="DD/MM/YYYY">{moment.utc(from)}</Moment> -{' '}
      {!to ? ' Now' : <Moment format="DD/MM/YYYY">{moment.utc(to)}</Moment>}
    </p>
    <p>
      <strong style={{ color: 'white' }}>Degree: </strong> {degree}
    </p>
    <p>
      <strong style={{ color: 'white' }}>Field Of Study: </strong> {fieldofstudy}
    </p>
    <p>
      <strong style={{ color: 'white' }}>Description: </strong> {description}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
