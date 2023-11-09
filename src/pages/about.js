import React from 'react';
import aboutBannerImage from '../Images/about_banner.webp';
import Banner from '../components/banner/banner';

const about = () => {
    return (
        <div>
             <Banner src={aboutBannerImage}/>
        </div>
    );
};

export default about;