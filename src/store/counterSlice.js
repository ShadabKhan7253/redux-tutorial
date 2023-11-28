import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'Counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: function (currentState) {
      console.log('Increment Called');
      return { ...currentState, count: currentState.count + 1 };
    },
    decrement: function (currentState) {
      console.log('Decrement Called');
      return { ...currentState, count: currentState.count - 1 };
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

const counterReducer = counterSlice.reducer;
export default counterReducer;
