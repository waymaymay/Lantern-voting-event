import React ,{useEffect, useState , useRef } from "react";
import '../areabutton/areaButton.css';

function AreaButton (props){
    const { number , text}=props;

    const [isClicked , setClicked]=useState(false);
    const [isHovered , setHovered]=useState(false);
    const buttonRef = useRef(null);

    const buttonStyle={
        backgroundColor: isClicked ? '#C3006D' : (isHovered ? '#9A0056' : '#CD0D7E'), // 点击后变为深桃色，否则为淺標準桃色
        padding: '5px 12px',
        border: 'none',
        borderRadius: '9px',
        color: isClicked? '#F4DC39':'#FFF',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
  
        
  };

    const squareStyle={
        backgroundColor: isClicked ? '#F4DC39' : (isHovered ? '#CD0D7E' : '#C3006D'), // 点击后变黃色，否则为深桃色
        width: '28px',
        height: '28px',
        marginRight: '8px',
        padding:'6px',
        borderRadius: '6px',
        color: isClicked? '#C3006D':'#FFF',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
        fontSize: '1.1rem',
    };


    const handleMouseEnter = () => {
        setHovered(true);
      };

    const handleMouseLeave =()=>{
        setHovered(false);
    };

    const handleClick =()=>{
        setClicked(!isClicked);
         // 点击后停止悬停效果
    };

    useEffect(() => {
      const handleClickOutside = (event) => {
          if (buttonRef.current && !buttonRef.current.contains(event.target)) {
              setClicked(false);
          }
      };

      window.addEventListener('click', handleClickOutside);

      // Cleanup function to remove the event listener
      return () => {
          window.removeEventListener('click', handleClickOutside);
      };
  }, [isClicked]);

    return(      
        <button 
            ref={buttonRef}
            className="areabutton"
            style={buttonStyle} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            >
            
            <span style={squareStyle}>{number}</span>
            {text && <span>{text}</span>}
            
        </button>

  );
}
export default AreaButton;

