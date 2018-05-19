import {
  GET_CURRENCY_PAIRS_FAIL,
  GET_CURRENCY_PAIRS_LOADING,
  GET_CURRENCY_PAIRS_SUCCESS
} from "./types";

export const getCurrencyPairs = () => dispatch => {
  dispatch(getCurrencyPairsLoading());
  fetch("/api/currency_pairs")
    .then(res => res.json())
    .then(currencies =>
      dispatch({
        type: GET_CURRENCY_PAIRS_SUCCESS,
        payload: Object.keys(currencies)
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CURRENCY_PAIRS_FAIL,
        payload: err
      })
    );
};

export const getCurrencyPairsLoading = () => {
  return {
    type: GET_CURRENCY_PAIRS_LOADING
  };
};
