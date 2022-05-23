import React, { useState } from 'react';
import '../../pages/styles/createResume.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import SkillsBlock from './blocks/SkillsBlock';
import AddJob from '../../utils/Modals/AddJob';
import { IModalProps } from '../../config/types';

const CreateResume = () => {
  const [isAddJob, setIsAddJob] = useState(false);

  const addJobClick = () => {
    setIsAddJob(isAddJob ? false : true);
  };

  const addResumeFormClick = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className='add-resume'>
      <h1>Создание резюме</h1>
      <form
        className='add-resume__form'
        onSubmit={(e) => addResumeFormClick(e)}
      >
        <div className='add-resume__form__left-part'>
          <div className='form__left-part__contacts'>
            <span className='add-resume__form-subTitle'>Контактные данные</span>
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
              <div className='form__left-part__main-info__inputs-group'>
                <span>Опыт работы</span>
                <div className='is-experience-block'>
                  <button className='yes-experience experience-checked'>
                    Есть опыт
                  </button>
                  <button className='no-experience'>Нет опыта</button>
                </div>
              </div>
            </div>
          </div>
          <div className='form__left-part__education'>
            <span className='add-resume__form-subTitle'>Образование</span>
            <div className='form__left-part__education__inputs'>
              <div className='form__left-part__education__inputs-group'>
                <label htmlFor='level-education'>Уровень</label>
                <div className='inputs-group__input'>
                  <input type='text' name='education-level__select' />
                </div>
              </div>
            </div>
          </div>
          <div className='form__left-part__languages'>
            <span className='add-resume__form-subTitle'>Владение языками</span>
            <div className='form__left-part__languages__inputs'>
              <div className='form__left-part__languages__inputs-group'>
                <label className='native-lang'>Родной язык</label>
                <div className='inputs-group__input'>
                  <input type='text' name='native-lang' />
                </div>
              </div>
              <div className='form__left-part__languages__inputs-group other-langs__block'>
                <label htmlFor='other-lang'>Иностранные языки</label>
                <div className='inputs-group__input'>
                  <input type='text' className='other-lang-name' />
                  <input type='text' className='other-lang-level' />
                </div>
              </div>
              <button className='add-lang__btn'>Добавить ещё язык</button>
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
          <div className='form__left-part__experience'>
            <span className='add-resume__form-subTitle'>Опыт работы</span>
            <div className='form__left-part__experience__inputs'>
              <div className='form__left-part__experience__inputs-group'>
                <span className='job-title'>Места работы</span>
                <button
                  className='add-job-place__btn'
                  onClick={() => addJobClick()}
                >
                  Добавить место работы
                </button>
              </div>
              <div className='form__left-part__experience__inputs-group'>
                <label htmlFor='about-me'>О себе</label>
                <div className='experience__about-me-textarea'>
                  <textarea placeholder='Расскажите о себе ту информацию, которая, как вам кажется, будет полезна работодателю'></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className='form__left-part__skills'>
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
          </div>
          <button type='submit' className='primary-btn save-resume__btn'>
            Сохранить и опубликовать
          </button>
        </div>
      </form>
      {isAddJob && <AddJob isOpen={setIsAddJob} />}
    </div>
  );
};

export default CreateResume;
