import { INCREMENT, DECREMENT } from "./action-type";

// 包含所有的 action creator

export const increment = (number) => ({ type: INCREMENT, data: number })
export const decrement = (number) => ({ type: DECREMENT, data: number })
export const incrementAsync = (number) => function (dispatch) {
    setTimeout(() => {
        dispatch(increment(number))
    }, 1000);
}
