import React from 'react';
import AboutMeInfo from './blocks/AboutMeInfo';
import ExperienceInfo from './blocks/ExperienceInfo';
import MainInfo from './blocks/MainInfo';
import PersonalInfo from './blocks/PersonalInfo';
import SkillsInfo from './blocks/SkillsInfo';
import TopHeader from './TopHeader';

import { motion } from 'framer-motion';
import EducationInfo from './blocks/EducationInfo';
import LanguagesInfo from './blocks/LanguagesInfo';

const MainBlock = () => {
  return (
    <motion.div
      className='profile__main-block'
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TopHeader />
      <div className='profile__main-block__resume'>
        <div className='profile__main-block__resume-left'>
          <PersonalInfo />
          <MainInfo />
          <SkillsInfo />
          <ExperienceInfo />
          <AboutMeInfo />
          <EducationInfo />
          <LanguagesInfo />
        </div>
        <div className='profile__main-block__resume-right'></div>
      </div>
    </motion.div>
  );
};

export default MainBlock;
