import React,{useState} from "react";
import '../part/webPresent.css';


const WebPresent=({images})=>{
    const [currentIndex,setCurrestIndex]=useState(0);

    const handleNext =()=>{
        setCurrestIndex((prevIndex)=>(prevIndex +1 )% images.length);
    };

    const handlePrev =()=>{
        setCurrestIndex((prevIndex)=>(prevIndex-1+images.length)%images.length);
    };

    const shouldHideButtons = images.length <= 1;

    return(
        <div>
            <img src={ images[currentIndex]} 
            alt={`Images ${currentIndex +1}`}
            style={{ width: '590px', height: '358px' }}
            />
            <button onClick={handlePrev}>上一張</button>
            <button onClick={handleNext}>下一張</button>
        </div>
        
    );
};

export default WebPresent;