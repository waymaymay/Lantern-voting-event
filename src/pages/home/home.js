import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../pages/home/home.css';
import AreaButton from '../../component/areabutton/areaButton';
import UpperButton from '../../component/upperbutton/upperButton';
import ClosePageButton from '../../component/closepagebutton/closePageButton';
import WebPresent from '../../component/part/webPresent';
import IssueText from '../../component/issuetext/IssueText';
import MyPage from '../mypage/myPage';
import VoteButton from '../../component/part/votebutton/VoteButton';


import image101 from '../../images/contest/1山線-豐原區燈組.jpg';
import image102 from '../../images/contest/1_2山線test.jpg';
import image201 from '../../images/contest/2山線-石岡區燈組.png';
import image301 from '../../images/contest/3山線-大雅區燈組.png';



function Home(){
    const banner_img = require('../../images/banner_img.png')
    const banner_h5 = require('../../images/H5-index-banner.png')
    
    // 圖片區
    const carouselImages1 =[image101 , image102]; 
    const carouselImages2 =[image201 ]; 
    const carouselImages3 =[image301 ]; 


    //文案區
    const issueTextContent = {
        topTitle: '豐山線-山城龍賀尞',
        itemNumber: 1,
        mainTitle: '豐原區公所',
        groupName: '美樂豐原 龍耀葫蘆墩',
        introduce1: '吉祥物-福蘆妹,葫蘆墩圳為中部最老的灌溉水圳之一, 慈濟宮-豐原最早的廟宇及信仰中心',

    };

    const navigate = useNavigate();

    const navigateToMyPage = () => {
        navigate('/MyPage'); // Use the route you defined for MyPage component
    };


    return (
        <div className='layout'>
            <div className='row '> 
                <div className='banner_img'>
                    <img src= {banner_img} alt=" " className='banner web-banner'/>
                    <img src= {banner_h5} alt=' ' className='banner h5-banner'/>
                </div>
                <div className='main-content'>   
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

                    <div className='areabutton_group'>                
                        <div className='fir_line row flex-nowrap flex-sm-wrap' >
                            <AreaButton className="col col-sm-2" number={1} text="豐原區公所" />
                            <AreaButton className="col col-sm-2" number={2} text="石岡區公所" />
                            <AreaButton className="col col-sm-2" number={3} text="大雅區公所" />
                            <AreaButton className="col col-sm-2" number={4} text="沙鹿區公所" />
                            <AreaButton className="col col-sm-2" number={5} text="龍井區公所" />
                            <AreaButton className="col col-sm-2" number={6} text="梧棲區公所" />
                            <AreaButton className="col col-sm-2" number={7} text="大肚區公所" />

                            <AreaButton className="col col-sm-2" number={8} text="清水區公所" />
                            <AreaButton className="col col-sm-2" number={9} text="烏日區公所" />
                            <AreaButton className="col col-sm-2" number={10} text="霧峰區公所" />
                            <AreaButton className="col col-sm-2" number={11} text="南屯區公所" />
                            <AreaButton className="col col-sm-2" number={12} text="西屯區公所" />
                            <AreaButton className="col col-sm-2" number={13} text="北區區公所" />
                            <AreaButton className="col col-sm-2" number={14} text="東區區公所" />
                     
                            <AreaButton className="col col-sm-2" number={15} text="新社區公所" />
                            <AreaButton className="col col-sm-2" number={16} text="潭子區公所" />
                            <AreaButton className="col col-sm-2" number={17} text="后里區公所" />
                            <AreaButton className="col col-sm-2" number={18} text="東勢區公所" />
                            <AreaButton className="col col-sm-2" number={19} text="神岡區公所" />
                            <AreaButton className="col col-sm-2" number={20} text="大甲區公所" />
                            <AreaButton className="col col-sm-2" number={21} text="外埔區公所" />

                            <AreaButton className="col col-sm-2" number={22} text="大安區公所" />
                            <AreaButton className="col col-sm-2" number={23} text="大里區公所" />
                            <AreaButton className="col col-sm-2" number={24} text="太平區公所" />
                            <AreaButton className="col col-sm-2" number={25} text="南區區公所" />
                            <AreaButton className="col col-sm-2" number={26} text="西區區公所" />
                            <AreaButton className="col col-sm-2" number={27} text="北屯區公所" />
                            <AreaButton className="col col-sm-2" number={28} text="中區區公所" />

                        </div>
                    </div>

                        <UpperButton/>

                        <div className='contest_group'>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages1}/>
                            </div>
                            <div className='right_group'>
                                <IssueText {...issueTextContent} />
                                <div className='vote_button' onClick={navigateToMyPage} > 
                                    <VoteButton label={"投下您的一票"} />
                                </div>
                            </div>


                        
                        </div>

                        <div className='contest_group_double'>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages2}/>
                            </div>
                            <div className='right_group'>
                                <IssueText {...issueTextContent} />
                            </div>
                        </div>

                        <div className='contest_group'>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages3}/>
                            </div>
                            <div className='right_group'>
                                <IssueText {...issueTextContent} />
                            </div>
                        </div>
                    </div>
            </div>
                
        </div>
    );
}
export default Home;