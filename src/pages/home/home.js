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
                        <div className='index-top top'>活動時間</div>
                        <div className='index-sub sub'>2025年1月20日</div>
                    </div>

                    <div className='notice-two'>
                        <div className='index-top'>活動獎項</div>
                        <div className='index-sub sub'>抽獎送台中名產</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Home;