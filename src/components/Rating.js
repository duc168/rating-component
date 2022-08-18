import React from 'react';
import Stars from './Stars';
import './Rating.css';
import { RatingProvider } from './context';

const Rating = (props) => {
    const { value } = props;
    return (
        <RatingProvider {...props}>
            <Stars defaultValue={value} />
        </RatingProvider>
    )
};


export default Rating;
