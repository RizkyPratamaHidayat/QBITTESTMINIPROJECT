import {SET_PRODUCT_LIST} from './generalReducerTypes';
import { getProductList} from '../../helpers/request';

export const setProduct = (payload) => {
  return {
    type: SET_PRODUCT_LIST,
    payload,
  }
}
export const fetchProduct = () => {
  return async (dispatch) => {
    const responseToday = await getProductList()
    dispatch(setProduct(responseToday))
  }
}
