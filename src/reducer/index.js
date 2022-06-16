import data from './../data/gifs'
import {FETCH_START, FETCH_SUCCESS} from './../actions';

const initialState = {
    gifs:[],
    loading: false,
    error: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return{
                ...state,
                loading,
                error:'',
            }

        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                gif: action.payload,
                error:'',
            }
            default:
                return(state);
    }
}

export default reducer;