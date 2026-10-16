import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, reset } from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount,setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();


  function handleIncrementClick(){
    dispatch(increment());

  }
  function handleDecrementClick(){
    dispatch(decrement());
  }
  function handleResetClick(){
    dispatch(reset());
  }
  function handleIncAmountClick() {
    dispatch(incrementByAmount(Number(amount)));
  }

  return (
    <div className="contianer">
      <button onClick={handleIncrementClick}> + </button>
      <p> Count : {count}</p>
      <button onClick={handleDecrementClick}> - </button>
      <br/ >
      <br/ >
      <button onClick={handleResetClick}> Reset </button>
      <br/ >
      <br/ >
      <input type="number" value={amount} placeholder="Enter Amount" onChange={(e)=>setAmount(e.target.value)} />
      <button onClick={handleIncAmountClick}> Increment by amount </button>
    </div>
  )
}

export default App
