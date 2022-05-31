import React from 'react';
import '../styles/home.scss';
import Header from '../../Components/Layouts/Header/Header';
import MyResume from './MyResume';
import Footer from '../../Components/Layouts/Footer/Footer';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='homepage'>
      <Header />
      <MyResume />
      <Footer />
    </div>
  );
};

export default Home;
