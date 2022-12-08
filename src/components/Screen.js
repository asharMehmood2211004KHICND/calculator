import React from 'react'
import '../styles/Screen.css';
import { useState } from 'react';

export const Screen = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='Screen' >{count}</div>
  )
}
