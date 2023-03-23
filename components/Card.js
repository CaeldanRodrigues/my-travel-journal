import React from 'react'

export default function Card(props) {
    return (
        <div className='card'>
            <img className='card--img' src={`${props.item.imageUrl}`}/>
            <div className='card--data'>
                <div className='card--location'>
                    <span>
                        <i className='fa fa-location-dot'></i>
                        {' '+ props.item.location}
                    </span>
                    <a href={`${props.item.googleMapsUrl}`} className='gmaps--link'>View on Google Maps</a>
                </div>
                <div className='card--body'>
                    <h2 className='card--title'>{props.item.title}</h2>
                    <p className='card--dates'>{props.item.startDate} - {props.item.endDate}</p>
                    <p className='card--info'>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}