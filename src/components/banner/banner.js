import React from 'react';
import './_banner.scss'

const banner = (props) => {
    return (
        <div className='banner'>
            <img src={props.src} alt={props.alt}/>
            <div>
            <h1>{props.bannerTitle}</h1>
            </div>
        </div>
    );
};

export default banner;