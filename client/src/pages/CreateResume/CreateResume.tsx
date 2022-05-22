import React from 'react';
import '../styles/createResume.scss';
import Header from '../../Components/Layouts/Header/Header';
import Footer from '../../Components/Layouts/Footer/Footer';
import AddResume from './AddResume';

const CreateResume = () => {
  return (
    <div className='create-resume'>
      <Header />
      <AddResume />
      <Footer />
    </div>
  );
};

export default CreateResume;
