import {useState} from "react"
import "./components/login.css"
/**
 *As an assignment ask the students to add multiple various elements and 
 apply various event handlers to it
Try using destructing too   
 */
const App = () => {
  const [ counter, setCounter ] = useState(0)


  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>

      <button onClick={increaseByOne}>
        plus
      </button>

      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}

export default App