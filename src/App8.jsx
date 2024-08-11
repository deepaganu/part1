import { useState } from "react"
import "./components/login.css"
/**
 * Passing the state to the child components 
 * now the Hello needs to be split into 
 * 1. Display 
 * 2. Button ---- Increment Button , Decrement Button , Reset Button 
 * State Management: If the parent component needs to manage the state affected by the event (e.g., a click event that changes a value in the parent), then it's common to handle the event in the parent component.
   Passing Handlers as Props: The parent component can pass event handler functions to child components via props. The child component will then call these functions when an event occurs, allowing the parent to control the response.
   When a state is used in multiple components then it should be maintained 
   in parent along with its handlers
   Parent-Child Relationship: In some cases, the state might be managed in a parent component, while the handler is passed down to child components. This is common in scenarios where multiple components need to share or react to the same state.
 */
const App = ()=>
{
  const [counter,setCounter] = useState(0)
  const incrementCounter = ()=> {setCounter(counter+1)}
  const decrementCounter = () =>{setCounter(counter-1)}
  const reset = ()=>{setCounter(0)}

  return(<div>
  <Display counter={counter}/>
  <MButton onClick={incrementCounter} text="increment"/>
  <MButton onClick={decrementCounter} text="decrement"/>
  <MButton onClick={reset} text="reset"/>
  
    </div>)
}
export default App
const Display = ({counter})=>
{
  return (
    <div>
    <p>You are {counter} visitor of the site</p>
    </div>
  )
}
/**
 * 
 * @returns the event to the Parent
 */
const MButton = (props)=>
{
  return(<div>
    <button onClick={props.onClick}>{props.text}</button>
    </div>)
}
