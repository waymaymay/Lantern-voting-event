import React,{useState} from "react";
import '../part/webPresent.css';

const left_arrow = require('../../images/left_arrow.png')
const right_arrow = require ('../../images/right_arrow.png')

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
        <div className="web-present-container">
            
            <div className="web-present">
                <button onClick={handlePrev} className="arrow-button left-arrow">
                    <img src={left_arrow} alt='' className="left_arrow"/>
                </button>
                    
                <button onClick={handleNext} className="arrow-button right-arrow">
                    <img src={right_arrow} alt='' className="right_arrow"/>
                </button>
                <img 
                    src={ images[currentIndex]} 
                    alt={`Images ${currentIndex +1}`}
                    style={{ width: '96%', height: '60%', borderRadius: '14px',boxShadow:'1.5px 1.5px 8px rgba(0,0,0, 0.35)'}}
                    className="big_image"  //圖比例1:1.6
                    />
            </div>
        {images.length > 1 && (
            <div className="dots-container">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrestIndex(index)}
                    />
                ))}
            </div>
        )}
        </div>
    );
};

export default WebPresent;