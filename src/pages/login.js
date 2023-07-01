import {useNavigate} from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import FirebaseContext from "../context/firebase";

function Login() {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAdress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isValid = password == "" || emailAddress == "";

  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return <p> login page ! </p>;
}

export default Login;
