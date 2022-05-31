import React from 'react';
import '../../styles/resume.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenClip, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const ExperienceInfo = () => {
  return (
    <div className='resume__experience-info'>
      <div className='resume__title-block'>
        <span className='profile-block__title'>Опыт работы 3 года</span>
        <FontAwesomeIcon icon={faPenClip} className='edit-pen-icon' />
      </div>
      <div className='resume__experience-info__list'>
        <div className='resume__experience-info__item'>
          <div className='experience-info__item__general'>
            <div className='item__general__left'>
              <div className='item__general__left__title-block'>
                <span className='experience-info__item-title'>
                  Microsoft Corporation
                </span>
                <span className='experience-info__item-siteurl'>
                  www.microsoft.com
                </span>
              </div>
              <div className='item__general__left__location-block'>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className='location-icon'
                />
                <span className='location-block__value'>Чехия, Прага</span>
              </div>
            </div>
            <div className='item__general__right'>
              <span className='from-to__time-job'>Ноябрь 2018 - Март 2021</span>
            </div>
          </div>
          <div className='experience-info__item__description-block'>
            <span className='item__description-block__title'>
              Программист отдела технической оптимизации
            </span>
            <p className='item__description-block__text'>
              Занимался поддержкой существующих онлайн-магазинов на Bitrix,
              WordPress, также настраивал SEO, дорабатывал функционал (Верстка
              блоков и внедрение их в CMS, разработка фидбек форм)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceInfo;
