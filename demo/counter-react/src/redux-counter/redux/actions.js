// action type
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// action creator
export const increment = (number) => ({ type: INCREMENT, data: number })
export const decrement = (number) => ({ type: DECREMENT, data: number })