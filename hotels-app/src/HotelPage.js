import React from 'react';
import CallNowButton from './CallNowButton';
import './HotelPage.css';

export default class HotelPage extends React.Component {
    render() {
        return (
            <div className='hotel-page'>
                {/* picture */}
                <ul className='hotel-info'>
                    <li>{this.props.hotel.name}</li>
                    <li>{this.props.hotel.street}</li>
                    <li>{this.props.hotel.house}</li>
                    <li>{this.props.hotel.phone}</li>
                </ul>
                <CallNowButton className='call-btn'/>
            </div>
        )
    }
}