import React from 'react';
import './home.css';
import AreaButton from '../../component/areabutton/areaButton';
import UpperButton from '../../component/upperbutton/upperButton';
import WebPresent from '../../component/part/webPresent';
import image1 from '../../images/contest/1山線-豐原區燈組.jpg';
import image2 from '../../images/contest/1_2山線test.jpg';

function Home(){
    const banner_img = require('../../images/banner_img.png')
    const banner_h5 = require('../../images/H5-index-banner.png')
    const carouselImages =[image1 , image2];
    


    return (
        <div className='layout'>
            <div className='banner_img'>
                <img src= {banner_img} alt=" " className='banner web-banner'/>
                <img src= {banner_h5} alt=' ' className='banner h5-banner'/>
            </div>
            <div className='main-content'>
                <div className='notice-group'>
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
                
                <div className='fir_line'>
                    <AreaButton number={1} text="豐原區公所" />
                    <AreaButton number={2} text="石岡區公所" />
                    <AreaButton number={3} text="大雅區公所" />
                    <AreaButton number={4} text="沙鹿區公所" />
                    <AreaButton number={5} text="龍井區公所" />
                    <AreaButton number={6} text="梧棲區公所" />
                    <AreaButton number={7} text="大肚區公所" />
                </div>

                <div className='fir_line'>
                    <AreaButton number={8} text="清水區公所" />
                    <AreaButton number={9} text="烏日區公所" />
                    <AreaButton number={10} text="霧峰區公所" />
                    <AreaButton number={11} text="南屯區公所" />
                    <AreaButton number={12} text="西屯區公所" />
                    <AreaButton number={13} text="北區區公所" />
                    <AreaButton number={14} text="東區區公所" />
                </div>

                <div className='fir_line'>
                    <AreaButton number={15} text="新社區公所" />
                    <AreaButton number={16} text="潭子區公所" />
                    <AreaButton number={17} text="后里區公所" />
                    <AreaButton number={18} text="東勢區公所" />
                    <AreaButton number={19} text="神岡區公所" />
                    <AreaButton number={20} text="大甲區公所" />
                    <AreaButton number={21} text="外埔區公所" />
                </div>

                <div className='fir_line'>
                    <AreaButton number={22} text="大安區公所" />
                    <AreaButton number={23} text="大里區公所" />
                    <AreaButton number={24} text="太平區公所" />
                    <AreaButton number={25} text="南區區公所" />
                    <AreaButton number={26} text="西區區公所" />
                    <AreaButton number={27} text="北屯區公所" />
                    <AreaButton number={28} text="中區區公所" />
                </div>
                <UpperButton/>

                <div className='contest_group'>
                    <div className='left_group'>
                        < WebPresent images ={carouselImages}/>
                        
                    </div>
                    
                </div>

            </div>
        </div>
    );
}
export default Home;