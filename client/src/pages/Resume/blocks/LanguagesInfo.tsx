import React from 'react';
import '../../styles/resume.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenClip } from '@fortawesome/free-solid-svg-icons';

const LanguagesInfo = () => {
  return (
    <div className='resume__languages-info'>
      <div className='resume__title-block'>
        <span className='profile-block__title'>Знание языков</span>
        <FontAwesomeIcon icon={faPenClip} className='edit-pen-icon' />
      </div>
      <div className='resume__languages-info__list'>
        <span className='languages-info__list__native-lang'>
          Русский - Родной
        </span>
        <span className='languages-info__list__other-lang'>
          Английский - B1 (Middle)
        </span>
      </div>
    </div>
  );
};

export default LanguagesInfo;
