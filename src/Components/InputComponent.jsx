import React, { useState } from 'react'
import myStore from '../Redux/Store';
import './stylesModule.css';

 const InputComponent = () => {
    const [counter, setCounter] = useState(0);
    
    myStore.dispatch(
        {
            type: "counter",
            count: counter,
        }
    )

  return (
    <div className='inputClass'>
        <button onClick={(e) => setCounter(counter + 1)}>Increment</button>
        <button onClick={(e) => setCounter(counter - 1)}>Decrement</button>
        <button onClick={(e) => setCounter(0)}>Reset</button>
    </div>
  );
}


export default InputComponent;