import React from 'react';

export default class CallNowButton extends React.Component {
    render() {
        return (
            <button className='call-btn' onClick={() => console.log('Calling...')}>Call Hotel</button>
        )
    }
}