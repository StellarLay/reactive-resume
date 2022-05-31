import React, { useState } from 'react';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserTie } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <header className='header'>
      <div className='header__left-part'>
        <Link to='/'>
          <div className='login-block__right__logo'>
            <span>RR</span>
          </div>
        </Link>
        <nav className='header__left-part__menu'>
          <NavLink to='/'>Мои резюме</NavLink>
          <NavLink to='/help'>Помощь</NavLink>
          <NavLink to='/about-me'>О сервисе</NavLink>
        </nav>
      </div>
      <div className='header__right-part'>
        <Link to='/create'>
          <button className='create-resume__btn'>Создать резюме</button>
        </Link>
        {isLogin ? (
          <Link to='/login'>
            <button className='login-resume__btn'>Вход</button>
          </Link>
        ) : (
          <div className='header__right-part__icon-btns'>
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
            <Link to='/login'>
              <FontAwesomeIcon icon={faUserTie} className='user-icon' />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
