import { OREDER_SET_TYPE } from "./constants";

export const SetOrderType = (dispatch, orderType) => {
    return dispatch({
        type: OREDER_SET_TYPE,
        payload: orderType,
    });
};