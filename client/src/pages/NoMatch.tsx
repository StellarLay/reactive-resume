import React from 'react';
import './styles/noMatch.scss';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div>
      <Link to='/' className='back-link'>
        Назад
      </Link>
      <h1>Извините, ничего не нашли :(</h1>
    </div>
  );
};

export default NoMatch;
