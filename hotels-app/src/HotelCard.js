import React from 'react';
import './HotelCard.css';

export default class HotelCard extends React.Component {
    render() {
        return (
            <div className='hotel-card'>
                <img className='hotel-img' alt='placeholder' src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"/>
                <div>{this.props.name}</div>
            </div>
        )
    }
}