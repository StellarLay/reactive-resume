import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserTie } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__left-part'>
        <Link to='/'>
          <div className='login-block__right__logo'>
            <span>RR</span>
          </div>
        </Link>
        <nav className='header__left-part__menu'>
          <Link to='/'>Мои резюме</Link>
          <Link to='/help'>Помощь</Link>
          <Link to='/about-me'>О сервисе</Link>
        </nav>
      </div>
      <div className='header__right-part'>
        <Link to='/create'>
          <button className='create-resume__btn'>Создать резюме</button>
        </Link>
        <FontAwesomeIcon icon={faSearch} className='search-icon' />
        <Link to='/login'>
          <FontAwesomeIcon icon={faUserTie} className='user-icon' />
        </Link>
      </div>
    </header>
  );
};

export default Header;
