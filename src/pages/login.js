import {useNavigate} from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import FirebaseContext from "../context/firebase";

function Login() {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAdress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password == "" || emailAddress == "";

  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iPhone with Ins app" />
      </div>
      <div className="flex flex-col w-2/5">
        <h1 className="flex justify-centerw-full">
          <img
            src="/images/logo.png"
            alt="Instagram"
            className="mt-2 w-6/12 mb-4"
          />
        </h1>
        {error && <p className="mb-4 text-xs text-red-primary"> {error} </p>}

        <form onSubmit={handleLogin} method="POST">
          <input
            aria-label="Enter your email address"
            type="text"
            placeholder="Email address"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-4"
            onChange={e => setEmailAdress(e.target.value)}
          />
          <input
            aria-label="Enter your password"
            type="password"
            placeholder="Password"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-4"
            onChange={e => setPassword(e.target.value)}
          />
          <button
            disabled={isInvalid}
            type="submit"
            className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${
              isInvalid && 'opacity-50'
            }`}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
