import fetch from "isomorphic-fetch";
import moment from "moment";

const API_KEY = "YOUR_API_KEY";
const getFormattedUrl = day => {
    const momentDay = moment(day).format("YYYY-MM-DD");
    return `https://api.nasa.gov/neo/rest/v1/feed?start_date=${momentDay}&end_date=${momentDay}&api_key=${API_KEY}`;
};

export const actions = {
    REQUEST_NEOWS_DATA: "REQUEST_NEOWS_DATA",
    RECEIVE_NEOWS_DATA: "RECEIVE_NEOWS_DATA",
    RECEIVE_ERROR: "RECEIVE_ERROR",
};

export function requestNeowsData (day, page) {
    return {
        type: actions.REQUEST_NEOWS_DATA,
        day,
        page
    }
}

export function receiveNeowsData (data, day) {
    return {
        type: actions.RECEIVE_NEOWS_DATA,
        data,
        day,
        receivedAt: Date.now()
    }
}

export function receiveError (error) {
    return {
        type: actions.RECEIVE_ERROR,
        error,
        receivedAt: Date.now()
    }
}

export function fetchNeowsData (day, page) {
    return (dispatch) => {
        dispatch(requestNeowsData(day, page));
        return fetch(getFormattedUrl(day))
            .then(response => response.json())
            .then(json => dispatch(receiveNeowsData(json, moment(day).format("YYYY-MM-DD"))))
            .catch(err => dispatch(receiveError(err.message)));
    }
}