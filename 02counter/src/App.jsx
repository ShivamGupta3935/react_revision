import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  console.log("counter : ", counter);

 function increase(){
     if (counter < 20) {
        counter += 1;
        return setCounter(counter)
     }
     
 }

 function decrease(){
     if (counter > 0) {
        counter -= 1
        return setCounter(counter)
     }
 }


  return (
    <>
      <h1>Counter Project !!!</h1>
      <h4>Counter Value is {counter}</h4>
      <button onClick={increase}> Increase </button>
      <button onClick={decrease}> decrease </button>           
    </>
  )
}

export default App
