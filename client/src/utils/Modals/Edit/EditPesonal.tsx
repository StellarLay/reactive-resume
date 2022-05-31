import React from 'react';
import '../modals.scss';
import Backdrop from '../Backdrop';
import { IModalProps } from '../../../config/types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { motion } from 'framer-motion';

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

const EditPesonal = (props: IModalProps) => {
  return (
    <Backdrop>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className='edit-pesonal__form'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <form className='edit-resume__form'>
          <div className='add-resume__form__left-part'>
            <div className='form__left-part__contacts'>
              <span className='add-resume__form-subTitle'>
                Контактные данные
              </span>
              <div className='form__left-part__contacts__inputs'>
                <div className='form__left-part__contacts__inputs-group'>
                  <label htmlFor='firstname'>Имя</label>
                  <div className='inputs-group__input'>
                    <input type='text' name='firstname' />
                  </div>
                </div>
                <div className='form__left-part__contacts__inputs-group'>
                  <label htmlFor='lastname'>Фамилия</label>
                  <div className='inputs-group__input'>
                    <input type='text' name='lastname' />
                  </div>
                </div>
                <div className='form__left-part__contacts__inputs-group'>
                  <label htmlFor='phone'>Мобильный телефон</label>
                  <div className='inputs-group__input'>
                    <input type='phone' name='phone' />
                  </div>
                </div>
                <div className='form__left-part__contacts__inputs-group'>
                  <label htmlFor='city'>Город проживания</label>
                  <div className='inputs-group__input'>
                    <input type='text' name='city' className='select-city' />
                  </div>
                </div>
              </div>
            </div>
            <div className='form__left-part__main-info'>
              <span className='add-resume__form-subTitle'>
                Основная информация
              </span>
              <div className='form__left-part__main-info__inputs'>
                <div className='form__left-part__main-info__inputs-group'>
                  <label htmlFor='date-birthday'>Дата рождения</label>
                  <div className='date-birthday__block'>
                    <input type='number' name='day' className='day' />
                    <input type='text' name='month' className='month' />
                    <input type='number' name='year' className='year' />
                  </div>
                </div>
                <div className='form__left-part__main-info__inputs-group'>
                  <span>Пол</span>
                  <div className='sex-group'>
                    <button className='male-radio sex-checked'>М</button>
                    <button className='female-radio'>Ж</button>
                  </div>
                </div>
                <div className='form__left-part__main-info__inputs-group'>
                  <label htmlFor='citizenship'>Гражданство</label>
                  <div className='citizenship'>
                    <input type='text' name='citizenship' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='add-resume__form__right-part'>
            <div className='form__left-part__position'>
              <span className='add-resume__form-subTitle'>Специальность</span>
              <div className='form__left-part__position__inputs'>
                <div className='form__left-part__position__inputs-group'>
                  <label htmlFor='position'>Должность</label>
                  <div className='inputs-group__input'>
                    <input type='text' name='position' />
                  </div>
                </div>
                <div className='form__left-part__position__inputs-group'>
                  <label htmlFor='salary'>Зарплата</label>
                  <div className='inputs-group__input salary-input__group'>
                    <input type='text' name='salary' className='salary-value' />
                    <input
                      type='text'
                      name='salary-type'
                      className='salary-type'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='form__left-part__additional-info'>
              <span className='add-resume__form-subTitle'>
                Дополнительная информация
              </span>
              <div className='form__left-part__additional-info__inputs'>
                <div className='form__left-part__additional-info__inputs-group additional-info__checkboxes-group'>
                  <label htmlFor='time-job'>График работы</label>
                  <div className='checkboxes-column'>
                    <div className='inputs-group__checkbox'>
                      <input type='checkbox' id='full-time' />
                      <label htmlFor='full-time'>Полный</label>
                    </div>
                    <div className='inputs-group__checkbox'>
                      <input type='checkbox' id='flexible-time' />
                      <label htmlFor='flexible-time'>Гибкий</label>
                    </div>
                    <div className='inputs-group__checkbox'>
                      <input type='checkbox' id='remote-time' />
                      <label htmlFor='remote-time'>Удаленный</label>
                    </div>
                  </div>
                </div>
                <div className='form__left-part__additional-info__inputs-group additional-info__checkboxes-group'>
                  <label htmlFor='time-job'>Занятость</label>
                  <div className='checkboxes-column'>
                    <div className='inputs-group__checkbox'>
                      <input type='checkbox' id='full-employment' />
                      <label htmlFor='full-employment'>Полная</label>
                    </div>
                    <div className='inputs-group__checkbox'>
                      <input type='checkbox' id='partial-employment' />
                      <label htmlFor='partial-employment'>Частичная</label>
                    </div>
                    <div className='inputs-group__checkbox'>
                      <input type='checkbox' id='internship-employment' />
                      <label htmlFor='internship-employment'>Стажировка</label>
                    </div>
                  </div>
                </div>
                <div className='form__left-part__additional-info__inputs-group additional-info__checkboxes-group moved-checkboxes-group'>
                  <label htmlFor='time-job'>Переезд</label>
                  <div className='checkboxes-column'>
                    <div className='inputs-group__checkbox'>
                      <input type='radio' id='yes-move' name='radio-moved' />
                      <label htmlFor='yes-move'>Возможен</label>
                    </div>
                    <div className='inputs-group__checkbox'>
                      <input type='radio' id='no-move' name='radio-moved' />
                      <label htmlFor='no-move'>Невозможен</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type='submit' className='primary-btn save-resume__btn'>
              Сохранить и опубликовать
            </button>
          </div>
        </form>

        <FontAwesomeIcon
          icon={faXmark}
          className='cross-icon'
          onClick={props.handleClose}
        />
      </motion.div>
    </Backdrop>
  );
};

export default EditPesonal;
