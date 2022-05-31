import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Home from './pages/Home/Home';
import Registration from './Components/Auth/Registration';
import NoMatch from './pages/NoMatch';
import CreateResume from './pages/CreateResume/CreateResume';
import { AnimatePresence } from 'framer-motion';
import Resume from './pages/Resume/Resume';

type RoutesProps = {
  path: string;
  Component: any;
};

function App() {
  const location = useLocation();

  const routes: RoutesProps[] = [
    { path: '/', Component: <Home /> },
    { path: 'reg', Component: <Registration /> },
    { path: 'login', Component: <Login /> },
    { path: 'create', Component: <CreateResume /> },
    { path: 'resume', Component: <Resume /> },
    { path: '*', Component: <NoMatch /> },
  ];

  return (
    <div className='App'>
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} />
          ))}
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
