import React from 'react';
import HotelCard from './HotelCard';

export default class HotelsGallery extends React.Component {
    render() {
        const hotelList = this.props.hotels;
        return (
            <div>
                {hotelList.map(hotel => (
                    <HotelCard className='hotel-card' name={hotel.name} />
                ))}
            </div>
        )
    }
}