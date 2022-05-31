import React from 'react';
import '../../styles/resume.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenClip } from '@fortawesome/free-solid-svg-icons';

const EducationInfo = () => {
  return (
    <div className='resume__education-info'>
      <div className='resume__title-block'>
        <span className='profile-block__title'>Образование</span>
        <FontAwesomeIcon icon={faPenClip} className='edit-pen-icon' />
      </div>
      <div className='resume__education-info__content'>
        <span className='resume__education-info__title'>
          Среднее специальное образование
        </span>
        <div className='resume__education-info__list'>
          <div className='resume__education-info__item'>
            <div className='resume__education-info__item__left'>
              <span className='resume__education-info__item__title'>
                ГПОУ ТО ТГКСТ
              </span>
              <span className='resume__education-info__item__subtitle'>
                Информационные системы и программирование
              </span>
            </div>
            <div className='resume__education-info__item__right'>
              <span className='resume__education-info__item__right__date-end'>
                2021
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationInfo;
