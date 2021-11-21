import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HotelGallery from './HotelsGallery';
import HotelPage from './HotelPage';
import { hotels } from './Data.js';
import './App.css';

export default class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path='/' element={<HotelGallery hotels={hotels}/>} />

                        {hotels.map(hotel => (
                            <Route path={encodeURI(hotel.name)}
                                element={<HotelPage hotel={hotel} />}
                            />
                        ))}
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}