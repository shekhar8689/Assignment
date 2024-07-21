import React from 'react';
import './LearningApprochItem.css';

function LearningApproachItem({ icon, title, description }) {
  return (
    <div className="learning-approach-item ">
      <div>
        <img src={icon} alt={title} className="learning-approach-icon" />
        <p>{description}</p>
      </div>
      <div className='learning-approach-separator'></div>
    </div>
  );
}

export default LearningApproachItem;
