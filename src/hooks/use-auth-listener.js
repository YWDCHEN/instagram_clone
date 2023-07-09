import {useState, useEffect, useContext} from 'react';
import FirebaseContext from '../context/firebase';

export default function useAuthListener(){
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const {firebase} = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged(authUser => {
      //if user exist => store in localstorage
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        //don't have user => clear the local storage
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });
    return () => listener();
  }, [firebase]);

  return {user};
}
