import React ,{useState} from "react";
import '../numberbutton/numberButton.css';

function NumberButton (props){
    const { number}=props;

    const [isClicked , setClicked]=useState(false);

    const buttonStyle={
        backgroundColor: isClicked ? '#FFC91A' : '#C3006D', // 点击后变黃色，否则为深桃色
        padding: '5px 16px;',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        cursor: 'pointer',
  };
    
    const handleMouseDown = () => {
        setClicked(true);
      };
    const handleMouseUp =()=>{
        setClicked(false);
    };

    return(
        <button className="numberbutton"
        style={buttonStyle} 
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        >
      {number && <span>{number}</span>}
    </button>
  );
}
export default NumberButton;