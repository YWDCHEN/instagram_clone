import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import {lazy} from 'react';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/use-auth-listener';
import UserContext from './context/user';
// import ProtectedRoute from './helpers/protected.route';

const Login = lazy(() => import('./pages/login'));
const Signup = lazy(() => import('./pages/signup'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Profile = lazy(() => import('./pages/profile'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  const {user} = useAuthListener();

  const ProtectedRoute = ({user, children, redirectPath = {Login}}) => {
    if (user) {
      return children;
    }
    if (!user) {
      return <Navigate to={ROUTES.LOGIN} replace />;
    }
    return null;
  };

  const IsUserLoggedIn = ({user, loggedInPath, children}) => {
    if (!user) {
      return children;
    }
    if (user) {
      return <Navigate to={loggedInPath} replace />;
    }
    return null;
  };

  return (
    <UserContext.Provider value={{user}}>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route
              path={ROUTES.LOGIN}
              element={
                <IsUserLoggedIn
                  user={user}
                  loggedInPath={ROUTES.DASHBOARD}
                  exact
                >
                  <Login />
                </IsUserLoggedIn>
              }
            />
            <Route
              path={ROUTES.SIGN_UP}
              element={
                <IsUserLoggedIn
                  user={user}
                  loggedInPath={ROUTES.DASHBOARD}
                  exact
                >
                  <Signup />
                </IsUserLoggedIn>
              }
            />
            <Route path={ROUTES.PROFILE} Component={Profile} />
            <Route
              path={ROUTES.DASHBOARD}
              element={
                <ProtectedRoute user={user} exact>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route Component={NotFound} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
