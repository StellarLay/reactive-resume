import React from 'react';
import '../../styles/resume.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenClip } from '@fortawesome/free-solid-svg-icons';

const AboutMeInfo = () => {
  return (
    <div className='resume__about-me-info'>
      <div className='resume__title-block'>
        <span className='profile-block__title'>Обо мне</span>
        <FontAwesomeIcon icon={faPenClip} className='edit-pen-icon' />
      </div>
      <div className='resume__about-me__text'>
        <p>
          Ответственность, исполнительность, усидчивость, высокая обучаемость.
          <br />
          Умею разбираться в чужом коде. <br />
          Портфолио: Небольшой проект React + TypeScript:
          <br />
          https://github.com/StellarLay/react-booking <br />
          Demo (+ Responsive): https://stellarlay.github.io/react-booking/{' '}
          <br />
          Из хобби: Веб-дизайн Окончил музыкальную школу по классу гитары и
          хореографии с красным дипломом. Изучаю английский язык, активно
          занимаюсь спортом.
        </p>
      </div>
    </div>
  );
};

export default AboutMeInfo;
