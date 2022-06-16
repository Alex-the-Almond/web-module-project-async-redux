export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
import axios from 'axios';


export const getGifs = () => {
    return( dispatch => {
        dispatch({type: FETCH_START})
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=vEN64GfKItv9k31wqMrcjYxKN9cGX2Hi&q=cats`)
        .then(res => {
            dispatch({type: FETCH_SUCCESS, payload: res.data.data});
        })
    });
}

export const fetchStart = () => {
    return({type: FETCH_START})
}

export const fetchSuccess = () => {
    return({type: FETCH_SUCCESS, payload: gifs})
}