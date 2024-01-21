import React, { useState, useEffect } from "react";
import '../upperbutton/upperButton.css';

function UpperButton (){
    const upper_img = require('../../images/upper.png')
    const [showButton, setShowButton] = useState(false);

    const buttonStyle={
        padding: '5px 5px;',
        border: 'none',
        cursor: 'pointer',
        position: 'fixed',
        display: showButton ? 'block' : 'none',
  };

  const handleScrollTop= ()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  };

  const handleScroll = () => {
    // 监听页面滚动事件
    if (window.scrollY > 200) {
        setShowButton(true);
    } else {
        setShowButton(false);
    }
};

useEffect (()=>{
  // 添加页面滚动事件监听器
  window.addEventListener('scroll', handleScroll);

  // 在组件卸载时移除事件监听器
  return () => {
      window.removeEventListener('scroll', handleScroll);
};
},[]);


  return(
    <div className="upper_img" style={buttonStyle} onClick={handleScrollTop}>
      <img src={upper_img} alt='' className="upper_img"/>
    </div>);
}
export default UpperButton;

