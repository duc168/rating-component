import React from 'react';
import { EMPTY_STATE, FILLED_STATE, FULL_MODE, HALF_FILLED_STATE, HALF_MODE } from './constants';
import { useRatingContext } from './context';
import { isDecimal, isLessThanHalf } from './utility';

const getState = (currentIndex, hoverIndex, selectedIndex, mode) => {
    if (mode === FULL_MODE) {
        if (hoverIndex === undefined) {
            if (currentIndex <= selectedIndex) {
                return FILLED_STATE;
            }
        }
        if (currentIndex <= hoverIndex) {
            return FILLED_STATE;
        }
    }
    if (mode === HALF_MODE) {
        if (hoverIndex === undefined) {
            if (currentIndex === Math.ceil(selectedIndex) && isDecimal(selectedIndex) === true) {
                return HALF_FILLED_STATE;
            }
            if (currentIndex === selectedIndex) {
                return FILLED_STATE;
            }
            if (currentIndex < selectedIndex) {
                return FILLED_STATE;
            }
        }
        if (currentIndex === Math.ceil(hoverIndex) && isDecimal(hoverIndex) === true) {
            return HALF_FILLED_STATE;
        }
        if (currentIndex === hoverIndex) {
            return FILLED_STATE;
        }
        if (currentIndex < hoverIndex) {
            return FILLED_STATE;
        }
    }
    return EMPTY_STATE;
}

const getSrc = (state, icons) => {
    if (state === EMPTY_STATE) return icons.emptyIcon;
    if (state === FILLED_STATE) return icons.filledIcon;
    if (state === HALF_FILLED_STATE) return icons.halfFilledIcon;
    return icons.emptyIcon;
}

const Star = ({ order }) => {
    const { updateHoveredIndex, hoveredIndex, mode, updateValue, value, icons } = useRatingContext();
    const state = getState(order, hoveredIndex, value, mode);
    const src = getSrc(state, icons);

    const mouseEnterHandler = (event) => {
        if (mode === HALF_MODE) {
            const isHalf = isLessThanHalf(event);
            if (isHalf) {
                updateHoveredIndex(order - 0.5);
                return;
            }
        }
        updateHoveredIndex(order);
    }
    const mouseLeaveHandler = () => {
        updateHoveredIndex(undefined);
    }

    const mouseMoveHandler = (event) => {
        if (event.target !== null) {
            mouseEnterHandler(event);
            return;
        }
        mouseLeaveHandler();

    }
    const mouseClickHandler = (event) => {
        if (Math.ceil(value) === order) {
            updateValue(0);
            return;
        }
        if (mode === HALF_MODE) {
            const isHalf = isLessThanHalf(event);
            if (isHalf) {
                updateValue(order - 0.5);
                return;
            }
        }
        updateValue(order)
    }
    return <img src={src}
        className="rating-image"
        data-testid="rating-icon"
        alt="Rate"
        onMouseMove={mouseMoveHandler}
        onMouseLeave={mouseLeaveHandler}
        onClick={mouseClickHandler}
    />
}

export default Star;