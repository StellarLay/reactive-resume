import React, { useState } from 'react';
import '../../styles/resume.scss';

import EditSkills from '../../../utils/Modals/Edit/EditSkills';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenClip } from '@fortawesome/free-solid-svg-icons';

import { motion, AnimatePresence } from 'framer-motion';

const SkillsInfo = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className='resume__skills-info'>
      <div className='resume__title-block'>
        <span className='profile-block__title'>Ключевые навыки</span>
        <motion.div
          className='edit-pen__btn'
          onClick={() => (modalOpen ? close() : open())}
        >
          <FontAwesomeIcon icon={faPenClip} className='edit-pen-icon' />
        </motion.div>
      </div>
      <div className='skills-block'>
        <div className='skills-block__skill'>
          <span>React</span>
        </div>
        <div className='skills-block__skill'>
          <span>Typescript</span>
        </div>
        <div className='skills-block__skill'>
          <span>Javascript</span>
        </div>
        <div className='skills-block__skill'>
          <span>Docker</span>
        </div>
        <div className='skills-block__skill'>
          <span>Git</span>
        </div>
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && <EditSkills handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default SkillsInfo;
