import {useState} from "react"
import "./login.css"
/**
 *As an assignment ask the students to add multiple various elements and 
 apply various event handlers to it
Try using destructing too   
 */

const App = ()=>
{
  const [counter,setCounter] = useState(0)
  const handleClick = () =>{
    console.log({counter});
    setCounter(counter+1)
  }
  return (
    <div>
    <p>You are the {counter} visitor</p>
    <button id="submit" onClick={handleClick}>Click Me</button>

    <button id="reset">Reset</button>
    </div>
  )
}
export default App