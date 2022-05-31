import React from 'react';
import '../modals.scss';
import SkillsBlock from '../../../pages/CreateResume/blocks/SkillsBlock';
import Backdrop from '../Backdrop';
import { IModalProps } from '../../../config/types';

import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const EditSkills = (props: IModalProps) => {
  return (
    <Backdrop>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className='form__left-part__skills edit-modal__skills modal'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className='form__left-part__skills__inputs'>
          <div className='form__left-part__skills__inputs-group'>
            <label htmlFor='skills-label'>Ключевые навыки</label>
            <div className='inputs-group__input'>
              <input
                type='text'
                name='skills-input'
                placeholder='Указывайте через запятую'
              />
              <div className='check-border'>
                <FontAwesomeIcon icon={faCheck} className='check-icon' />
              </div>
            </div>
          </div>
          <SkillsBlock />
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          className='cross-icon'
          onClick={props.handleClose}
        />
      </motion.div>
    </Backdrop>
  );
};

export default EditSkills;
