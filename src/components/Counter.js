import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/counterSlice';

export const Counter = () => {
  const value = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div style={{ margin: '40px' }}>
      <h1>Counter</h1>
      <button onClick={handleIncrement} style={{ marginRight: '5px' }}>
        Add
      </button>
      {value}
      <button onClick={handleDecrement} style={{ marginLeft: '5px' }}>
        Sub
      </button>
    </div>
  );
};
