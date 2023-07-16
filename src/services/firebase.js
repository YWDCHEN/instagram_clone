// eslint-disable-next-line no-unused-vars
import {firebase, FieldValue} from '../lib/firebase';

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  console.log(result);

  return result.docs.map(user => user.data().length > 0);
}

//get user from the firestore based on the userId passed by the auth
export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get();

  const user = result.docs.map(item => ({
    ...item.data(),
    docId: item.id,
  }));
  return user;
}

export async function getSuggestedProfiles(userId, following = []) {
  const result = await firebase.firestore().collection('users').limit(10).get();

  return result.docs
    .map(user => ({...user.data(), docId: user.id}))
    .filter(
      (profile) =>
        profile.userId !== userId && !following.includes(profile.userId),
    );
}

//updateLoggedInUserFollowing, updateFollowedUserFollowers

export async function updateLoggedInUserFollowing(
  loggedInUserDocId,
  profileId,
  isFollowing,
) {
  return firebase
    .firestore()
    .collection('users')
    .doc(loggedInUserDocId)
    .update({
      following: isFollowing
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
}

export async function updateFollowedUserFollowers(
  profileDocId,
  loggedInUserDocId,
  isFollowing,
) {
  return firebase
    .firestore()
    .collection('users')
    .doc(profileDocId)
    .update({
      following: isFollowing
        ? FieldValue.arrayRemove(loggedInUserDocId)
        : FieldValue.arrayUnion(loggedInUserDocId),
    });
}
