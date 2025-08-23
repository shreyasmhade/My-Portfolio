import React, {useState} from 'react'
function Counter() {
const [count, setCount] = useState(0);
const handleAdd = () =>{
    setCount(count+1)
    }
const handleReduce = () =>{
    setCount(count-1)
}
    return (
      <div className="container">
        <div className='counter-box'>
          <p>Count is {count}</p>
          <div>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleReduce}>-</button>
          </div>
        </div>
      </div>
    );
}

export default Counter;