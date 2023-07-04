import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {lazy} from 'react';
import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/login'));
const Signup = lazy(() => import('./pages/signup'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
