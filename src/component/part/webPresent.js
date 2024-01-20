import React,{useState} from "react";
import PropTypes from 'prop-types';
import '../part/webPresent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const WebPresent=({images})=>{
    const [currentIndex,setCurrestIndex]=useState(0);
    
    let shouldHideButtons = images.length<= 1;
   

    const handleNext =()=>{
        setCurrestIndex((prevIndex)=>(prevIndex +1 )% images.length);
    };

    const handlePrev =()=>{
        setCurrestIndex((prevIndex)=>(prevIndex-1+images.length)%images.length);
    };

    return(
        <div className="web-present-container">
                {images.length > 0 && (
            <div className="web-present">
            {!shouldHideButtons && (
                <>
                <button onClick={handlePrev} className="arrow-button left-arrow">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>

                <button onClick={handleNext} className="arrow-button right-arrow">
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
                </>
            )}
                    
                    <img 
                        src={ images[currentIndex]} 
                        alt={`Images ${currentIndex +1}`}
                        style={{ width: '96%', height: '60%', borderRadius: '14px',boxShadow:'1.5px 1.5px 8px rgba(0,0,0, 0.35)'}}
                        className="big_image"  //圖比例1:1.6
                        />
                    </div>
            )}
            
            
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

WebPresent.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,}


export default WebPresent;