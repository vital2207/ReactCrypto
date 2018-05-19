import {
  GET_TRADES_FAIL,
  GET_TRADES_SUCCESS,
  GET_TRADES_LOADING
} from "./types";

export const getTradesHistory = marketVal => dispatch => {
  dispatch(getTradesHistoryLoading());
  fetch("/api/tradeHistory", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      market: marketVal,
      date: Date.now()
    })
  })
    .then(res => res.json())
    .then(history =>
      dispatch({
        type: GET_TRADES_SUCCESS,
        payload: history
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TRADES_FAIL
      })
    );
};

export const getTradesHistoryLoading = () => {
  return {
    type: GET_TRADES_LOADING
  };
};
