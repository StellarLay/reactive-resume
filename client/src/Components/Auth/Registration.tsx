import React from 'react';
import './auth.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import HelloScreen from '../Layouts/HelloScreen/HelloScreen';

import { motion } from 'framer-motion';

const Registration = () => {
  return (
    <div className='login-block'>
      <motion.div
        className='login-block__left'
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className='login-block__left-blur registration-block'>
          <div className='login-block__left-inner'>
            <h2>Добро пожаловать!</h2>
            <span className='login-block__left-subText'>
              Создайте свой аккаунт
            </span>
            <form className='login-block__signIn-form'>
              <div className='login-block__signIn-form__firstname input-login'>
                <FontAwesomeIcon icon={faEnvelope} className='input-icon' />
                <input type='email' placeholder='Ваше имя' />
              </div>
              <div className='login-block__signIn-form__email input-login'>
                <FontAwesomeIcon icon={faEnvelope} className='input-icon' />
                <input type='email' placeholder='Email' />
              </div>
              <div className='login-block__signIn-form__password input-login'>
                <FontAwesomeIcon icon={faLock} className='input-icon' />
                <input type='password' placeholder='Пароль' />
              </div>
              <div className='login-block__signIn-form__confirm-password input-login'>
                <input
                  type='password'
                  placeholder='Подтвердите пароль'
                  autoComplete='on'
                />
              </div>
              <button type='submit' className='login-block__submit-btn reg-btn'>
                Зарегистрироваться
              </button>
            </form>
            <span className='login-block__not-account not-account__reg'>
              Уже есть аккаунт? <Link to='/login'>Войти</Link>
            </span>
          </div>
        </div>
      </motion.div>
      <HelloScreen />
    </div>
  );
};

export default Registration;
