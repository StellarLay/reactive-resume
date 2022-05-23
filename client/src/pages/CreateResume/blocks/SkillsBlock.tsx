import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const SkillsBlock = () => {
  return (
    <div className='skills-block'>
      <div className='skills-block__skill'>
        <span>React</span>
        <FontAwesomeIcon icon={faTrash} className='trash-icon' />
      </div>
      <div className='skills-block__skill'>
        <span>Typescript</span>
        <FontAwesomeIcon icon={faTrash} className='trash-icon' />
      </div>
      <div className='skills-block__skill'>
        <span>Javascript</span>
        <FontAwesomeIcon icon={faTrash} className='trash-icon' />
      </div>
      <div className='skills-block__skill'>
        <span>Docker</span>
        <FontAwesomeIcon icon={faTrash} className='trash-icon' />
      </div>
      <div className='skills-block__skill'>
        <span>Git</span>
        <FontAwesomeIcon icon={faTrash} className='trash-icon' />
      </div>
    </div>
  );
};

export default SkillsBlock;
