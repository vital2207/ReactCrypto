import {
  GET_TRADES_FAIL,
  GET_TRADES_LOADING,
  GET_TRADES_SUCCESS
} from "../actions/types";

const initialState = {
  loading: false,
  trades: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TRADES_SUCCESS:
      return {
        ...state,
        loading: false,
        trades: action.payload
      };
    case GET_TRADES_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_TRADES_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
