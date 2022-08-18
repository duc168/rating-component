import React from 'react';
import { DEFAULT_STARS } from './constants';
import { useRatingContext } from './context';
import Star from './Star';
const Stars = () => {
    const { increaseRating, decreaseRating, updateValue } = useRatingContext();
    const keyHandler = (event) => {
        const LEFT_ARROW_CODE = 37;
        const RIGHT_ARROW_CODE = 39;
        const NUM_1_CODE = 49;
        const NUM_2_CODE = 50;
        const NUM_3_CODE = 51;
        const NUM_4_CODE = 52;
        const NUM_5_CODE = 53;
        try {
            const keyCode = event.keyCode;
            if (keyCode === LEFT_ARROW_CODE) {
                decreaseRating();
                return;
            }
            if (keyCode === RIGHT_ARROW_CODE) {
                increaseRating();
                return;
            }
            // normal number
            if (keyCode === NUM_1_CODE) updateValue(1);
            if (keyCode === NUM_2_CODE) updateValue(2);
            if (keyCode === NUM_3_CODE) updateValue(3);
            if (keyCode === NUM_4_CODE) updateValue(4);
            if (keyCode === NUM_5_CODE) updateValue(5);
        } catch (error) {
            console.log('Something wrong happens.');
        }

    }

    return <div
        tabIndex="0"
        className="star-rating"
        data-testid="star-rating-container"
        onKeyDown={keyHandler}
    >
        {Array.from(Array(DEFAULT_STARS).keys()).map((index) => <Star key={index} order={index + 1} />)}
    </div>
}

export default Stars;