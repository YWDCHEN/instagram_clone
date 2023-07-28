import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Skeleton from "react-loading-skeleton";
import useUser from "../../hooks/use-user";
import {isUserFollowingProfile} from '../../services/firebase';

export default function Header({
  photosCount,
  profile: {docId: profileId, userId: profileUserId, fullname, following = []},
  followerCount,
  setFollowerCount,
}) {
  const {user} = useUser();
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);

  useEffect(() => {
    const isLoggedInUserFollowingProfile = async () => {
      const isFollowing = await isUserFollowingProfile(
        user.username,
        profileUserId,
      );
      setIsFollowingProfile(isFollowing);
    };
    if (user.username && profileUserId) {
      isLoggedInUserFollowingProfile();
    }
  }, [profileUserId, user.username]);
  return null;
}

Header.propTypes = {
  photosCount: PropTypes.number.isRequired,
  followerCount: PropTypes.number.isRequired,
  setFollowerCount: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    docId: PropTypes.string,
    userId: PropTypes.string,
    fullname: PropTypes.string,
    following: PropTypes.array,
  }).isRequired,
};
