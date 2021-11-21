import React from 'react';
import HotelCard from './HotelCard';
import './HotelsGallery.css';

export default class HotelsGallery extends React.Component {
    render() {
        const hotelList = this.props.hotels;
        return (
            <div id='hotel-gallery'>
                {hotelList.map(hotel => (
                    <HotelCard className='hotel-card' hotel={hotel} />
                ))}
            </div>
        )
    }
}