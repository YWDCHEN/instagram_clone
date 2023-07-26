import PropTypes from 'prop-types';
import Header from './header';
import Photos from './photos';
import {useReducer, useEffect} from 'react';
import {getUserPhotosByUsername} from '../../services/firebase';

export default function Profile({user}) {
  const reducer = (state, newState) => ({...state, ...newState});
  const initialState = {
    profile: {},
    photoCollection: [],
    followerCount: 0,
  };

  const [{profile, photosCollection, followerCount}, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = getUserPhotosByUsername(user.username);
      console.log('photos', photos);
      dispatch({
        profile: user,
        photosCollection: photos,
        followerCount: user.followers.length,
      });
      console.log('photosCollection',photosCollection);
    }
    getProfileInfoAndPhotos();
  }, [user, user.username]);

  return (
    <>
      <Header
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
      {/* <Photos photos={photosCollection} /> */}
      <p> hello {user.username} </p>
    </>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    usernmae: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
    following: PropTypes.array.isRequired,
    followers: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired,
  }),
};
