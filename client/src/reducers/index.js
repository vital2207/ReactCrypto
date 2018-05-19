import { combineReducers } from "redux";
import tradesReducer from "./tradesReducer";
import currencyReducer from "./currencyReducer";
export default combineReducers({
  trades: tradesReducer,
  currency: currencyReducer
});
