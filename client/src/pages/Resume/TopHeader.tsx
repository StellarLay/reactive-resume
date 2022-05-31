import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const TopHeader = () => {
  return (
    <div className='profile-section__top-header'>
      <Link to='/'>
        <button className='resume-list__btn'>
          <FontAwesomeIcon
            icon={faFile}
            className='file-icon fontawesome-icon'
          />
          К списку резюме
        </button>
      </Link>
      <span className='last-update__text'>
        Последнее обновление: 21.04.2022 в 17:45
      </span>
    </div>
  );
};

export default TopHeader;
