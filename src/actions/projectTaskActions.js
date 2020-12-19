import axios from 'axios';
import {
    GET_ERRORS,

} from "./types";

export const addLocation = (location,history) => async dispatch => {
    try {
        await axios.post('http://localhost:8080/api/Locations', location);
        history.push("/LocationList");
        dispatch({
            type:GET_ERRORS,
            payload:{}
        })
    }
    catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
};

export const addShedule = (shedule,history) => async dispatch => {
    try {
        await axios.post('http://localhost:8080/api/Trains', shedule);
        history.push("/SheduleList");
        dispatch({
            type:GET_ERRORS,
            payload:{}
        })
    }
    catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
};


