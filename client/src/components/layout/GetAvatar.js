import React, { Fragment } from 'react';
// const config = require('config');
// const websiteURL = config.get('websiteURL');

const GetAvatar = ( props ) => {  
//   console.log('Inside getAvatar, avatarForId = ', props.avatarForId)
//   console.log('default = ', props.avatar)
  return (
    <Fragment>
      {!props.avatar
          ? <img src={'/default-avatar.png'} alt='' className='round-img-default'/> 
          : 
          // <img className='round-img my-1' src={`http://localhost:5000/api/profile/avatar/${props.avatarForId}`} alt='' />
          // <img className='round-img my-1' src={`${websiteURL}/api/profile/avatar/${props.avatarForId}`} alt='' />
          <img className='round-img my-1' src={`/api/profile/avatar/${props.avatarForId}`} alt='' />
      }
    </Fragment>
  );
};
export default GetAvatar;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { Fragment, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import Spinner from '../layout/Spinner';
// import { getAvatar } from '../../actions/profile';

// const GetAvatar = ({ getAvatar, profile: { avatar, loading, error }, avatarForId}) => {
//   useEffect(() => {
//     getAvatar(avatarForId);
//   }, [getAvatar, avatarForId]);
//   console.log('Inside getAvatar, avatarForId = ', avatarForId)
//   console.log('error = ', error)

// //   console.log('Inside getAvatar, avatar = ', avatar)
//   return (
//     <Fragment>
//       {loading ? (
//         <Spinner />
//       ) : (
//           (error.state == 404)
//         // (avatar === null) 
//           ? <img src={'/default-avatar.png'} alt='' className='round-img-default'/> 
//           :
//         <Fragment>
//             {/* <img className='round-img my-1' src={`data:image/png;base64,${btoa(avatar)}`} alt='' /> */}
//          <img className='round-img my-1' src={`data:image/png;base64,${btoa(unescape(encodeURIComponent(avatar)))}`} alt='' />
//          {/* <img className='round-img my-1' src={URL.createObjectURL(avatar)} alt='' /> */}
//          {/* <img className='round-img my-1' src={`http://localhost:5000/api/profile/avatar/${avatarForId}`} alt='' /> */}
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };
// GetAvatar.propTypes = {
//   getAvatar: PropTypes.func.isRequired,
//   profile: PropTypes.object.isRequired,
// };
// const mapStateToProps = (state) => ({
//     profile: state.profile
// });
// export default connect(mapStateToProps, { getAvatar })(GetAvatar);