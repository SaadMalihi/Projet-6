import React from 'react';
import './_lodgingList.scss'
import Card from '../Card/Card'
import { getData } from '../../data'

const LodgingList = () => {
    const data= getData()
    return (
        <section className='lodgingList'>
            <div className='cardsList'>
                {data.map((lodgingListData) => (
                    <Card 
                        key={lodgingListData.id}
                        id={lodgingListData.id}
                        cover={lodgingListData.cover}
                        title={lodgingListData.title}
                
                    />
                ))}
            </div>
        </section>
    )
}

export default LodgingList;