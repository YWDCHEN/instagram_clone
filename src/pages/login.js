import {Link, useNavigate} from 'react-router-dom';
import {useContext, useState, useEffect} from 'react';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

function Login() {
  const navigate = useNavigate();
  const {firebase} = useContext(FirebaseContext);

  const [emailAddress, setEmailAdress] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');

  const [error, setError] = useState('');
  // eslint-disable-next-line eqeqeq
  const isInvalid = password == '' || emailAddress == '';

  const handleLogin = async e => {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAdress('');
      setPassword('');
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iPhone with Ins app" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col item-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
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
              value={emailAddress}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-4"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${
                isInvalid && 'opacity-50'
              }`}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
          <p className="text-sm"> Don't have an account?{' '}
            <Link to="/signup" className="font-bold text-blue-medium">
            Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
