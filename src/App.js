import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {lazy} from 'react';
import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/login'));
const Signup = lazy(() => import('./pages/signup'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} Component={Login} />
          <Route path={ROUTES.SIGN_UP} Component={Signup} />
          <Route path={ROUTES.NOT_FOUND} Component={NotFound} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
