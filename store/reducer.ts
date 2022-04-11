import { combineReducers } from "@reduxjs/toolkit";
import clientReducer from "./features/client";

export default combineReducers({
  client: clientReducer,
});
