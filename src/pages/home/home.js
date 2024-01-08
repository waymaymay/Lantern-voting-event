import React from 'react'
import './home.css'

function Home(){
    const banner_img = require('../../images/banner_img.png')

    return (
        <div className='layout'>
            <div className='banner_img'>
                <img src= {banner_img} alt=" "/>
                test
            </div>
        </div>
    )
}
export default Home