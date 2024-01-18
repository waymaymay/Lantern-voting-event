import React from 'react';
import '../closepagebutton/ClosePageButton.css';

const ClosePageButton = () => {
  const handleClosePage = () => {
    window.close();
  };

  return (
    <button className='ClosePageButton' onClick={handleClosePage}>
      X
    </button>
  );
};

export default ClosePageButton;
