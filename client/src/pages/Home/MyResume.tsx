import React from 'react';
import '../styles/myResume.scss';
import ResumeList from './ResumeList';

const MyResume = () => {
  return (
    <section className='resumes-section'>
      <h1>Мои резюме</h1>
      <ResumeList />
    </section>
  );
};

export default MyResume;
