import React from 'react';
import CallNowButton from './CallNowButton';
import './HotelPage.css';

export default class HotelPage extends React.Component {
    render() {
        return (
            <div className='hotel-page'>
                <div className='page-img'>picture</div>
                {/* img */}
                <div className='hotel-info'>
                    <div>Hotel name: {this.props.hotel.name}</div>
                    <div>Address: {this.props.hotel.street}</div>
                    <div>House number: {this.props.hotel.house}</div>
                    <div>Phone number: {this.props.hotel.phone}</div>
                </div>
                <CallNowButton />
            </div>
        )
    }
}