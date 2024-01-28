import React from 'react';
import '../../pages/thankspage/thanksPage.css'
import AreaButton from '../../component/areabutton/areaButton';
import UpperButton from '../../component/upperbutton/upperButton';
import ClosePageButton from '../../component/closepagebutton/closePageButton';
import WebPresent from '../../component/part/webPresent';
import IssueText from '../../component/issuetext/IssueText';
import VoteButton from '../../component/part/votebutton/VoteButton';
import { useNavigate } from 'react-router-dom';


function toggleBodyScroll(isEnabled) {
    if (isEnabled) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  }
  

function ThanksPage() {
    const header_pc = require('../../images/header_pc.png')
    const header_mb = require('../../images/header_mb.png')

    const navigate = useNavigate();

    const handleVoteClick = () => {
        navigate('/'); // Use the route you defined for MyPage component
    };


    return (
        <div className="page-container">
          <div className="scroll-container">
              <div className="header">
                  <div className='banner_img'>
                      <img src= {header_pc} alt=" " className='header pc-banner'/>
                      <img src= {header_mb} alt=' ' className='header mb-banner'/>
                  </div>
              </div>
              
              <div className="content">
              <div className="info-section"> 
                      <div className='notice-group' >
                          <div className='notice-one'>
                          </div>
  
                          <div className='notice-four'>
                              <div className='index-sub'>您已完成投票，感謝您</div>
                          </div>
                      </div>
              </div>
            </div>
          </div>
  
            <div className="person_data">
            <div className='vote_button_page' > 
                <VoteButton label={"離開"} onClick={handleVoteClick}  />
            </div>
            </div>
        </div>
          
      
      );
  }
  
  export default ThanksPage;