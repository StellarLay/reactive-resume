import React, { useState } from 'react';
import '../../styles/resume.scss';

const MainInfo = () => {
  return (
    <div className='resume__main-info'>
      <div className='resume__main-info__titleAndSalary-block'>
        <span className='resume__main-info__title'>React разработчик</span>
        <span className='resume__main-info__salary'>85 000 руб.</span>
      </div>
      <div className='resume__main-info__other-block'>
        <span className='other-block__employment'>
          <span className='other-block__title'>Занятость:</span> частичная
          занятость, полная занятость
        </span>
        <span className='other-block__job-schedule'>
          <span className='other-block__title'>График работы:</span> удаленная
          работа, гибкий график, полный день
        </span>
      </div>
    </div>
  );
};

export default MainInfo;
