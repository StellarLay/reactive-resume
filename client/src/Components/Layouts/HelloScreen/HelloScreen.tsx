import React from 'react';
import './HelloScreen.scss';
import logo from '../../../assets/img/HeartIcon.png';

const HelloScreen = () => {
  return (
    <div className='login-block__right'>
      <div className='login-block__top-block'>
        <h1>Reactive Resume</h1>
        <span className='login-block__right__sub-text'>
          Создай свое самое лучшее резюме
        </span>
        <img src={logo} alt='logo' className='heart-logo' />
      </div>
      <div className='login-block__right__bottom-block'>
        <div className='login-block__right__logo'>
          <span>RR</span>
        </div>
        <span className='login-block__right__team-text'>
          <a href='/'>StellarLay Team</a>
        </span>
      </div>
    </div>
  );
};

export default React.memo(HelloScreen);
