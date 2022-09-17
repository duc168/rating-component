export const DEFAULT_STARS = 5;
export const DEFAULT_VALUE = 0;
export const DEFAULT_STEPS = 1;

const baseUrl = process.env.PUBLIC_URL ?? '';

export const DEFAULT_EMPTY_ICON = baseUrl + '/icons/stars/empty.svg';
export const DEFAULT_FILLED_ICON = baseUrl + '/icons/stars/filled.svg';
export const DEFAULT_HALF_FILLED_ICON = baseUrl + '/icons/stars/half.svg';

export const EMPTY_STATE = 'empty';
export const FILLED_STATE = 'filled';
export const HALF_FILLED_STATE = 'half-filled';

export const FULL_MODE = 'full-mode';
export const HALF_MODE = 'half-mode';