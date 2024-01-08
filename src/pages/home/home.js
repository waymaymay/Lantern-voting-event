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
        </div>
    );
}
export default Home;