import React from 'react';
import CallNowButton from './CallNowButton';
import './HotelPage.css';
import { Link } from 'react-router-dom';

export default class HotelPage extends React.Component {
    render() {
        return (
            <div className='hotel-page'>
                <Link className='return-btn' to={'/'}>
                    <div>⬅️</div>
                </Link>
                <div className='page-img'>picture</div>
                <img className='hotel-img' alt='hotel' src={this.props.hotel.img} />
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