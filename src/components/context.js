import React, { createContext, useContext, useState } from 'react';
import { DEFAULT_EMPTY_ICON, DEFAULT_FILLED_ICON, DEFAULT_HALF_FILLED_ICON, DEFAULT_STARS, DEFAULT_STEPS, DEFAULT_VALUE, FULL_MODE, HALF_MODE } from './constants';
import { isDecimal } from './utility';

const useRating = (props) => {
    const { value: defaultValue, steps: defaultStep, emptyIcon, halfFilledIcon, filledIcon } = props;

    const icons = {
        emptyIcon: emptyIcon ?? DEFAULT_EMPTY_ICON,
        halfFilledIcon: halfFilledIcon ?? DEFAULT_HALF_FILLED_ICON,
        filledIcon: filledIcon ?? DEFAULT_FILLED_ICON
    }

    const mode = isDecimal(defaultStep ?? DEFAULT_STEPS) === true ? HALF_MODE : FULL_MODE;

    const [value, setValue] = useState(defaultValue ?? DEFAULT_VALUE);

    const [hoveredIndex, setHoveredIndex] = useState(undefined);
    const selectedIndex = value - 1;

    const updateValue = (newValue) => {
        if (newValue < 0 || newValue > DEFAULT_STARS) return;
        setValue(newValue);
    }

    const increaseRating = () => {
        if (mode === HALF_MODE) {
            updateValue(value + 0.5);
            return;
        }
        updateValue(value + 1);
    }

    const decreaseRating = () => {
        if (mode === HALF_MODE) {
            updateValue(value - 0.5);
            return;
        }
        updateValue(value - 1);
    }

    const updateHoveredIndex = (newIndex) => {
        setHoveredIndex(newIndex);
    }

    return {
        value,
        mode,
        selectedIndex,
        hoveredIndex,
        icons,

        updateHoveredIndex,
        updateValue,
        increaseRating,
        decreaseRating,
    }

};

const ratingContext = createContext(null);

const { Provider } = ratingContext;

export const RatingProvider = ({ children, ...props }) => {
    const value = useRating(props);
    return <Provider value={value}>{children}</Provider>;
};

export const useRatingContext = () => {
    const context = useContext(ratingContext);
    if (!context) throw new Error('useRatingContext must have a provider.');

    return context;
};