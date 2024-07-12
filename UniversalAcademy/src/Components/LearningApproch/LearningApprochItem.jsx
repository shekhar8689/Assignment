import React from 'react';
import './LearningApprochItem.css'; 

function LearningApproachItem({ icon, title, description }) {
  return (
    <div className="learning-approach-item ">
      <img src={icon} alt={title} className="learning-approach-icon" />
      <p>{description}</p>
    </div>
  );
}

export default LearningApproachItem;
