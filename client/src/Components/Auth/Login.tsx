import React, { useState } from 'react';
import './auth.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import HelloScreen from '../Layouts/HelloScreen/HelloScreen';

import { motion } from 'framer-motion';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className='login-block'>
      <motion.div
        className='login-block__left'
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className='login-block__left-blur'>
          <div className='login-block__left-inner'>
            <h2>Добро пожаловать!</h2>
            <span className='login-block__left-subText'>
              Выполните вход в аккаунт
            </span>
            <form className='login-block__signIn-form'>
              <div className='login-block__signIn-form__email input-login'>
                <FontAwesomeIcon icon={faEnvelope} className='input-icon' />
                <input type='email' placeholder='Email' />
              </div>
              <div className='login-block__signIn-form__password input-login'>
                <FontAwesomeIcon icon={faLock} className='input-icon' />
                <input type='password' placeholder='Пароль' autoComplete='on' />
              </div>
              <div className='login-block__signIn-form__login-options'>
                <div className='login-options__remember-me'>
                  <input type='checkbox' />
                  <span className='login-options__remember-me__text'>
                    Запомнить меня
                  </span>
                </div>
                <div className='login-options__forget-pass'>
                  <a href='/'>
                    <span className='login-options__forget-pass__text'>
                      Забыли пароль?
                    </span>
                  </a>
                </div>
              </div>
              <button type='submit' className='login-block__submit-btn'>
                Войти
              </button>
            </form>
            <span className='login-block__not-account'>
              Нет аккаунта? <Link to='/reg'>Регистрация</Link>
            </span>
          </div>
        </div>
      </motion.div>
      <HelloScreen />
    </div>
  );
};

export default Login;
