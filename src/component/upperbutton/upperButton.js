import React ,{useState} from "react";
import '../upperbutton/upperButton.css';

function UpperButton (){
    const upper_img = require('../../images/upper.png')

    const buttonStyle={
        padding: '5px 5px;',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
  };

  return(
    
    <div className="upper_img">
      <img src={upper_img} alt='' className="upper_img"/>
    
    </div>
    
  );
}
export default UpperButton;

// return (
//   <div className='layout'>
//       <div className='banner_img'>
//           <img src= {banner_img} alt=" " className='banner web-banner'/>
//           <img src= {banner_h5} alt=' ' className='banner h5-banner'/>
//       </div>