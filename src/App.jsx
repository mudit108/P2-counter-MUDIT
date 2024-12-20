import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let oldCount = JSON.parse(localStorage.getItem("count")) || 0 ;
    setCount(oldCount);
  }, [])
  

  const countIncrement = () => {
    let newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("count",newCount);
  }
  const countDecrement = () => {
    let newCount = count - 1;
    setCount(newCount);
    localStorage.setItem("count",newCount);
  }
  const resetCount =()=>{
    let newCount = 0;
    setCount(newCount);
    localStorage.setItem("count",newCount);
  }
  return (

    <>
      <h1>Couter</h1>
      <div className="card">
        <button onClick={countDecrement}>-
        </button>

        <p className='count-size'>Count is: {count}</p>
        <button onClick={countIncrement}>+
        </button>
      </div>
        <button className='reset-btn' onClick={resetCount}>RESET</button>
    </>
  )
}

export default App
