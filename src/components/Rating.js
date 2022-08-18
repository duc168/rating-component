import React from 'react';
import Stars from './Stars';
import './Rating.css';
import { RatingProvider } from './context';

const Rating = (props) => {
    return (
        <RatingProvider {...props}>
            <Stars />
        </RatingProvider>
    )
};


export default Rating;
