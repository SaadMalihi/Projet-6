import React from 'react';
import Banner from '../components/banner/banner';
import bannerImage from '../Images/home_banner.webp';
import LodgingList from '../components/lodgingList/LodgingList';
const home = () => {
    return (
        <main>
            <Banner src={bannerImage} bannerTitle='Chez vous, partout et ailleurs'/>
            <LodgingList />
        </main>
    );
};

export default home;