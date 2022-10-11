import {
    CATEGORIES_FAIL,
    CATEGORIES_REQUEST,
    CATEGORIES_SUCCESS
} from '../constants/category'

const initialState = {
    categories: [],
    loading: false
}

export const Category = (state = initialState, action) => {
    const { type, payload } = action

    switch(type){
        case CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload.categories,
                loading: false
            }
        case CATEGORIES_FAIL:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}