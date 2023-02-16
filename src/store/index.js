import { createSlice, configureStore } from "@reduxjs/toolkit";

const initCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      // data passes in will be store in action.payload
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  // must have config--reducer, contains 1 or more reducers
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// xxxx.actions will create automatic a obj with reducer funcs
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
