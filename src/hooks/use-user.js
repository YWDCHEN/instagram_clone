import {useState, useEffect} from 'react';
import {getUserByUserId} from '../services/firebase';

export default function useUser(userId){
  const [activeUser, setActiveUser] = useState();

  useEffect(() => {
    async function getUserByUserId(userId) {
      const [user] = await getUserByUserId(userId);
      setActiveUser(user || {});
    }
    if (userId) {
      getUserByUserId(userId);
    }
  }, [userId]);
  return {user: activeUser, setActiveUser};
}
