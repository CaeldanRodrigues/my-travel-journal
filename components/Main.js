import React from 'react'
import data from '../data'
import Card from './Card'

export default function Main() {
    
    const cards = data.map(item => {
        return (
            <Card 
                item={item}
            />
        )
    })
    // const cards = data.map(item => {
    //     return (
    //         <Card 
    //             imageUrl={item.imageUrl}
    //             title={item.title}
    //             location={item.location}
    //             googleMapsUrl={item.googleMapsUrl}
    //             startDate={item.startDate}
    //             endDate={item.endDate}
    //             description={item.description}
    //         />
    //     )
    // })
    
    return(
        <div className='main--content'>
            {cards}
        </div>
    )
}
