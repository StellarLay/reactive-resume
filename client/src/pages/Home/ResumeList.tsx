import React from 'react';
import '../styles/myResume.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const ResumeList = () => {
  return (
    <div className='resume-list'>
      <div className='resume-list__head'>
        <div className='resume-list__head-titles'>
          <span className='resume-list__title'>React разработчик</span>
          <span className='resume-list__last-update__text'>
            Последнее обновление: 21.04.2022 в 17:45
          </span>
        </div>
        <FontAwesomeIcon icon={faEllipsisVertical} className='dots-icon' />
      </div>
      <div className='resume-list__main'>
        <span className='resume-list__views'>
          Просмотров: <span className='resume-list__views-value'>189</span>
        </span>
        <div className='resume-list__status'>Активно</div>
      </div>
      <div className='resume-list__options'>
        <span className='resume-list__options-changeAccess'>
          Изменить доступ
        </span>
        <span className='resume-list__options-edit'>Редактировать</span>
        <span className='resume-list__options-duplicate'>Дублировать</span>
      </div>
    </div>
  );
};

export default ResumeList;
