import React, { useState } from 'react';
import avatar from '../../../assets/img/profile/photo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faEnvelope,
  faPenClip,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import EditPesonal from '../../../utils/Modals/Edit/EditPesonal';

const PersonalInfo = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className='resume__personal-info'>
      <div className='resume__personal-info__avatar'>
        <img src={avatar} alt='avatar' />
      </div>
      <div className='resume__personal-info__fields'>
        <div className='personal-info__fields__person-info'>
          <span className='person-info__fio'>
            Великоиваненко Владислав Анатольевич
          </span>
          <span className='person-info__birthday'>
            Мужчина, 21 год, родился 9 июня 2000
          </span>
          <div className='item__general__left__location-block'>
            <FontAwesomeIcon icon={faLocationDot} className='location-icon' />
            <span className='location-block__value'>Санкт-Петербург</span>
          </div>
        </div>
        <div className='personal-info__fields__contacts'>
          <div className='contacts__social'>
            <span className='contacts__social-title'>Для связи:</span>
            <div className='contacts__social-block'>
              <FontAwesomeIcon
                icon={faTelegram}
                className='telegram-icon social-icon'
              />
              <FontAwesomeIcon
                icon={faWhatsapp}
                className='whats-icon social-icon'
              />
            </div>
          </div>
          <div className='contacts__phone'>
            <FontAwesomeIcon icon={faPhone} className='phone-icon' />
            <span className='contacts__phone-value'>+7 (902) 907-03-70</span>
          </div>
          <div className='contacts__email'>
            <FontAwesomeIcon icon={faEnvelope} className='email-icon' />
            <span className='contacts__email-value'>Stellarlay@yandex.ru</span>
          </div>
        </div>
      </div>
      <hr />
      <motion.div
        className='edit-pen__btn'
        onClick={() => (modalOpen ? close() : open())}
      >
        <FontAwesomeIcon icon={faPenClip} className='edit-pen-icon' />
      </motion.div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && <EditPesonal handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default PersonalInfo;
