import {actions} from '../actions';

export function asteroids(state = {
    asteroids: [],
    isFetching: false,
    receivedAt: null,
    day: Date.now()
}, action) {
    switch (action.type) {
        case actions.REQUEST_NEOWS_DATA:
            return {
                isFetching: true,
                day: action.day
            };
        case actions.RECEIVE_NEOWS_DATA:
            return {
                asteroids: action.data.near_earth_objects[action.day],
                isFetching: false,
                day: action.day
            };
        default:
            return state;
    }
}