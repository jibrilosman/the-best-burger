import axios from "axios";
import { 
    OREDER_SET_TYPE,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL 
} from "./constants";

export const SetOrderType = (dispatch, orderType) => {
    return dispatch({
        type: OREDER_SET_TYPE,
        payload: orderType,
    });
};

export const listCategories = async (dispatch) => {
    dispatch({
        type: CATEGORY_LIST_REQUEST,
    });
    try {
        const { data } = await axios.get("http://localhost:5000/api/categories");
        dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CATEGORY_LIST_FAIL, payload: error.message });
    }
};

export const listProducts = async (dispatch, categoryName) => {
    dispatch({type: PRODUCT_LIST_REQUEST});

    try {
        const { data } = await axios.get(`http://localhost:5000/api/products?category=${categoryName}`);
        return dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        return dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
}