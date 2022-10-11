import axios from "axios";

import {
    CATEGORIES_FAIL,
    CATEGORIES_REQUEST,
    CATEGORIES_SUCCESS
} from '../constants/category'

export const get_categories = () => async (dispatch) => {
  dispatch({
    type: CATEGORIES_REQUEST,
  });

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/category/brands`
    );
    if (res.status === 200) {
      dispatch({
        type: CATEGORIES_SUCCESS,
        payload: res.data,
      });
    }
  } catch (error) {
    dispatch({
      type: CATEGORIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
