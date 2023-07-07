import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {lazy} from 'react';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/use-auth-listener';

const Login = lazy(() => import('./pages/login'));
const Signup = lazy(() => import('./pages/signup'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  const {user} = useAuthListener();
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} Component={Login} />
          <Route path={ROUTES.SIGN_UP} Component={Signup} />
          <Route path={ROUTES.DASHBOARD} Component={Dashboard} />
          <Route Component={NotFound} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
