import React from 'react';

export default class CallNowButton extends React.Component {
    render() {
        return (
            <button className='call-btn' onClick={() => window.open(`tel:${this.props.number}`)}>Call Hotel</button>
        )
    }
}