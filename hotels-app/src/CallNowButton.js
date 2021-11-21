import React from 'react';

export default class CallNowButton extends React.Component {
    render() {
        return (
            <button onClick={() => console.log('Calling...')}>Call Hotel</button>
        )
    }
}