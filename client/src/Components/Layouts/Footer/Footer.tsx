import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__col-1'>
        <span className='footer__col-1__title'>Reactive Resume</span>
        <span className='copyright'>© 2022 StellarLay</span>
      </div>
      <div className='footer__col-2'>
        <span className='footer__col-2__title'>Ссылки</span>
        <nav className='footer__menu'>
          <Link to='/'>Главная</Link>
          <Link to='/'>О проекте</Link>
          <Link to='/'>Отзывы</Link>
          <Link to='/'>Предложения</Link>
        </nav>
      </div>
      <div className='footer__col-3'>
        <span className='footer__col-3__title'>Для связи</span>
        <a className='footer__col-3__mail' href='mailto:stellarlay@yandex.ru'>
          Stellarlay@yandex.ru
        </a>
      </div>
      <div className='footer__col-4'>
        <div className='footer__col-4__social'>
          <FontAwesomeIcon
            icon={faGithub}
            className='social-icon gitHub-icon'
          />
          <FontAwesomeIcon
            icon={faTelegram}
            className='social-icon telegram-icon'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
