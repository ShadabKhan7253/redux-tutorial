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

export const { increment, decrement } = counterSlice.actions; // recucer mea type pass krte the wo ye h mtlb sb method access yahan se hga counterSlice.action se

const counterReducer = counterSlice.reducer;
export default counterReducer;
