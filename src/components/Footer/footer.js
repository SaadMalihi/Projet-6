import React from 'react';
import wlogo from '../../Images/LOGO_WHITE.svg'
import './_footer.scss'
const footer = () => {
    return (
        <footer>
            <div className='footerElement'>
                <img src={wlogo} alt='kasa logo blanc'/>
                <span className="footerLegal">© 2020 Kasa. All rights reserved</span>
            </div>      
        </footer>
    );
};

export default footer;