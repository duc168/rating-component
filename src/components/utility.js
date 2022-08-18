// Utility function to calculate if the mouse event happened on the left side of the target or the right side.
export const isLessThanHalf = (event) => {
    const { target } = event;
    const boundingClientRect = target.getBoundingClientRect();
    let mouseAt = event.clientX - boundingClientRect.left;
    mouseAt = Math.round(Math.abs(mouseAt));
    return mouseAt <= boundingClientRect.width / 2;
};

export const isDecimal = (number) => {
    return (number - Math.floor(number)) !== 0;
}