import React from 'react';
import { Link } from 'react-router-dom';

export default class HotelCard extends React.Component {
    render() {
        return (
            <div className='hotel-card'>
                <img className='hotel-img' alt='hotel' src={this.props.hotel.img} />
                <Link className='hotel-name' to={encodeURI(this.props.hotel.name)}>
                    <div>{this.props.hotel.name}</div>
                </Link>
            </div>
        )
    }
}