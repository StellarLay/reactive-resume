import React from 'react';
import './modals.scss';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// Здесь заюзал Styled components
interface IDivProps {
  dark?: boolean;
}

const AddJob = (props: any) => {
  const Container = styled.div<IDivProps>`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;

    ${(props) =>
      props.dark &&
      css`
        background: black;
      `};
  `;

  const closeClick = () => {
    props.isOpen(false);
  };

  return (
    <Container className='add-job__block'>
      <div className='add-job__block-form'>
        <span className='title'>Опыт работы</span>
        <div className='add-job__content'>
          <div className='add-job__content-left'>
            <div className='add-job__inputs-block'>
              <label>Начало работы</label>
              <div className='add-job__inputs-block__input'>
                <input type='text' value='Месяц' className='month-select' />
                <input type='text' value='Год' className='year-input' />
              </div>
            </div>
            <div className='add-job__inputs-block'>
              <label>Окончание</label>
              <div className='add-job__inputs-block__input'>
                <input type='text' value='Месяц' className='month-select' />
                <input type='text' value='Год' className='year-input' />
              </div>
              <div className='add-job__inputs-block__checkbox'>
                <input type='checkbox' id='current-time-check' />
                <label htmlFor='current-time-check'>По настоящее время</label>
              </div>
            </div>
            <div className='add-job__inputs-block inputs-block__company'>
              <label>Организация</label>
              <div className='add-job__inputs-block__input'>
                <input type='text' className='company-input' />
              </div>
            </div>
            <div className='add-job__inputs-block inputs-block__position'>
              <label>Должность</label>
              <div className='add-job__inputs-block__input'>
                <input type='text' className='position-input' />
              </div>
            </div>
          </div>
          <div className='add-job__content-right'>
            <div className='add-job__content-right__inputs-block'>
              <label htmlFor='job-me'>Обязанности на рабочем месте</label>
              <div className='job-me-textarea'>
                <textarea placeholder='Опишите, что вы делали на работе.'></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className='add-job__btn-block'>
          <button className='primary-btn add-job__btn'>Добавить</button>
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          className='cross-icon'
          onClick={() => closeClick()}
        />
      </div>
    </Container>
  );
};

export default AddJob;
