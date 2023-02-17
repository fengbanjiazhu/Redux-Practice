import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  // must have config--reducer, contains 1 or more reducers
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
