import * as actionTypes from '../constants/userConstants';
import axios from 'axios';

export const postTodo = todo => async dispatch => {
    try {
        dispatch({
            type: actionTypes.GET_USERS_REQ
        })
        axios.post('http://localhost:3001/postTodo', {
            data: todo
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        dispatch({
            type: actionTypes.GET_USERS_RES,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: actionTypes.GET_USERS_ERROR,
            error: err.message
        })
    }
}

export const  = todo => async dispatch => {
    try {
        dispatch({
            type: actionTypes.GET_USERS_REQ
        })
        axios.post('http://localhost:3001/postTodo', {
            data: todo
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        dispatch({
            type: actionTypes.GET_USERS_RES,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: actionTypes.GET_USERS_ERROR,
            error: err.message
        })
    }
}