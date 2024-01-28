import React from 'react';
import '../closepagebutton/ClosePageButton.css';

const ClosePageButton = () => {
  const handleClosePage = () => {
    window.close();
  };

  return (
    <button className='ClosePageButton' onClick={handleClosePage}>
     關閉
    </button>
  );
};

export default ClosePageButton;
