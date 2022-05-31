import React from 'react';
import '../styles/myResume.scss';
import ResumeList from './ResumeList';
import { motion } from 'framer-motion';

const MyResume = () => {
  return (
    <motion.section
      className='resumes-section'
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Мои резюме</h1>
      <ResumeList />
    </motion.section>
  );
};

export default MyResume;
