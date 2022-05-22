import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Home from './pages/Home/Home';
import Registration from './Components/Auth/Registration';
import NoMatch from './pages/NoMatch';
import CreateResume from './pages/CreateResume/CreateResume';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='reg' element={<Registration />} />
        <Route path='login' element={<Login />} />
        <Route path='create' element={<CreateResume />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
