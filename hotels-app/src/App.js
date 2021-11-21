import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HotelGallery from './HotelsGallery';
import HotelPage from './HotelPage';
import { hotels } from './Data.js';

export default class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path='/' element={<HotelGallery id='hotel-gallery' hotels={hotels}/>} />
                        <Route path='/hotel' element={<HotelPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}