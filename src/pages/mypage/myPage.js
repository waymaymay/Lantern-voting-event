import React from 'react';
import '../../pages/mypage/myPage.css'
import '../../component/issuetext/IssueText'
import '../../component/part/webPresent'
import image101 from '../../images/contest/1山線-豐原區燈組.jpg';
import image102 from '../../images/contest/1_2山線test.jpg';

function MyPage() {
    const header_pc = require('../../images/header_pc.png')
    const header_mb = require('../../images/header_mb.png')

    const carouselImages1 =[image101 , image102]; 

    return (
      <div className="page-container">
        <div className="header">
            <div className='banner_img'>
                <img src= {header_pc} alt=" " className='header pc-banner'/>
                <img src= {header_mb} alt=' ' className='header mb-banner'/>
            </div>
        </div>
        
        <div className="content">
             <div className='contest_group'>
                <div className='left_group'>
                    < WebPresent images ={carouselImages1}/>
                </div>
                <div className='right_group'>
                    <IssueText {...issueTextContent} />
                </div>
            </div>
        </div>
          <div className="info-section"> 
                <div className='notice-group' >
                    <div className='notice-one'>
                        <div className='index-top top'>線上投票辦法</div>
                        <div className='index-sub-light sub'>Party龍燈區評比活動即日起開跑!</div>
                        <div className='index-sub'>投票者每人每日1組手機號碼為1票,活動結束後,票選前三名的區公所燈組,將從投此名單中各抽出10位民眾,獲得臺中市十大伴手禮 (總計30份好禮)。</div>
                    </div>
                <hr className="my-divider" />

                    <div className='notice-two'>
                        <div className='index-top top'>抽獎結果公告</div>
                        <div className='index-sub'>2024年2月27日 (週二) 公布評比結果</div>
                        <div className='index-sub'>2024年3月01日 (週五) 公布伴手禮得獎名單</div>  
                    </div>  
                </div>
          </div>
          <div className="footer">
            {/* Footer content goes here */}
          </div>
        </div>
    
    );
  }
  
  export default MyPage;