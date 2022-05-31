import React from 'react';
import '../styles/resume.scss';

import Header from '../../Components/Layouts/Header/Header';
import Footer from '../../Components/Layouts/Footer/Footer';
import MainBlock from './MainBlock';

const Resume = () => {
  return (
    <section className='profile-section'>
      <Header />
      <MainBlock />
      <Footer />
    </section>
  );
};

export default Resume;
