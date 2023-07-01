import {useNavigate} from "react-router-dom";
import { useContext } from "react";
import FirebaseContext from "../context/firebase";

function Login() {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  return <p> login page ! </p>;
}

export default Login;
