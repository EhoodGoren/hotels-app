import React from 'react';
import { Link } from 'react-router-dom';

export default class HotelCard extends React.Component {
    render() {
        return (
            <div className='hotel-card'>
                <div className='hotel-img'>picture</div>
                {/* <img className='hotel-img' alt='placeholder' src="https://www.lovemysalad.com/sites/default/files/styles/image_530x397/public/banaan-large.jpg?itok=dZxH6D_w"/> */}
                <Link to={encodeURI(this.props.hotel.name)}>
                    <div className='hotel-name'>{this.props.hotel.name}</div>
                </Link>
            </div>
        )
    }
}