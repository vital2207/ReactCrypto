import {
  GET_CURRENCY_PAIRS_FAIL,
  GET_CURRENCY_PAIRS_LOADING,
  GET_CURRENCY_PAIRS_SUCCESS
} from "../actions/types";

const initialState = {
  loading: false,
  currency: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENCY_PAIRS_SUCCESS:
      return {
        ...state,
        loading: false,
        currency: action.payload
      };
    case GET_CURRENCY_PAIRS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_CURRENCY_PAIRS_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
