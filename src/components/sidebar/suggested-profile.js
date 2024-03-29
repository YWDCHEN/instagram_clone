import PropTypes from 'prop-types';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {updateLoggedInUserFollowing} from '../../services/firebase';
import {updateFollowedUserFollowers} from '../../services/firebase';

export default function SuggestedProfile({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId,
}) {
  const [follow, setFollow] = useState(false);

  async function handleFollowUser(){
    setFollow(true);

    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    await updateFollowedUserFollowers(profileDocId, userId, false);
  }

  return !follow ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
        />
        <Link to={`/p${username}`}>
          <p className="font-bold text-sm"> {username} </p>
        </Link>
      </div>
      <div>
        <button
          className="text-sm font-bold text-blue-medium"
          type="button"
          onClick={handleFollowUser}
        >
          Follow
        </button>
      </div>
    </div>
  ) : null;
}

SuggestedProfile.propType = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string,
};
