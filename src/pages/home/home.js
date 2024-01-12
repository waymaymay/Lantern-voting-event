import React from 'react';
import './home.css';

function Home(){
    const banner_img = require('../../images/banner_img.png')
    const banner_h5 = require('../../images/H5-index-banner.png')

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
                
            </div>
        </div>
    );
}
export default Home;