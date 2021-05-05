import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, selectCount } from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=> dispatch(increment())}>+</button>
      <h1>{count}</h1>
      <button onClick={()=> dispatch(decrement())}>-</button>
    </div>
  )
}


