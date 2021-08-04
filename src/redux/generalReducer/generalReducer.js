import {SET_PRODUCT_LIST} from './generalReducerTypes'

const initialState = {
    product : {},

}

const generalReducer = (state = initialState, action) =>{
    switch(action.type) {
        case SET_PRODUCT_LIST: return {
            ...state,
            product: {
              ...state.product,
              ...action.payload,
            }
          }
        default : return state;
    }
}

export default generalReducer;