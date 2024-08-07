import { useState } from "react"

/**
 * Uptil now in the main.jsx we were invoking the render method, but in react as the 
 * state of the component changes the rendering is done automatically 
 * So lets understand now how do we add a state to the component so that any change in the value of the state
 * would kickstart rendering
 * We were recieving the parameter from the parent , now we will define our own attribute 
 * which will define my state.
 * The function call adds state to the component and renders it initialized with the value zero. The function returns an array that contains two items. We assign the items to the variables counter and setCounter by using the destructuring assignment syntax shown earlier.

The counter variable is assigned the initial value of state, which is zero. The variable setCounter is assigned a function that will be used to modify the state.

The application calls the setTimeout function and passes it two parameters: a function to increment the counter state and a timeout of one second:
The function passed as the first parameter to the setTimeout function is invoked one second after calling the setTimeout function
When the state modifying function setCounter is called, React re-renders the component which means that the function body of the component function gets re-executed:
The second time the component function is executed it calls the useState function and returns the new value of the state: 1. Executing the function body again also makes a new function call to setTimeout, which executes the one-second timeout and increments the counter state again. Because the value of the counter variable is 1, incrementing the value by 1 is essentially the same as an expression setting the value of counter to 2.
Meanwhile, the old value of counter - "1" - is rendered to the screen.

Every time the setCounter modifies the state it causes the component to re-render. The value of the state will be incremented again after one second, and this will continue to repeat for as long as the application is running.

If the component doesn't render when you think it should, or if it renders at the "wrong time", you can debug the application by logging the values of the component's variables to the console. 
 * @param {*} param0 
 * @returns 
 */
const App = ()=>
{
  const [counter, setCounter] = useState(110)
  setTimeout(()=>{
    setCounter(counter+1)
  },1000)
  return (
    <div>
    The visitor number is {counter}
    </div>
  )
}
export default App