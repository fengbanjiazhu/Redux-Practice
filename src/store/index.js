import { createSlice, configureStore } from "@reduxjs/toolkit";

const initState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
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

// counterSlice.actions will create automatic a obj with funcs

const store = configureStore({
  // must have config--reducer:
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
