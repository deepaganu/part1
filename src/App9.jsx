import { useState } from "react"

/**
 * Using more attibutes for state
  const App = ()=>{
const [left,setLeft] = useState(100)
const [right,setRight] = useState(0)
return(
  <div>
  {left}
  <button onClick={()=>{setLeft(left-1)
    
  }}>Left</button>
  <button onClick={()=>{setRight(right+1)
    
  }}>Right</button>
  {right}
  </div>
)
  }
*/
//show how it is different from javaa, in java we can change the current object state. Here the object is immutable there for you need to create a new object and assign its state from ols values
// The code below wont work Avoid Direct Mutation:
//Instead of trying to directly mutate clicks, create a new object with the updated value. React relies on immutability to efficiently detect changes and re-render components.
//However, it is forbidden in React to mutate state directly, since it can result in unexpected side effects. Changing state has to always be done by setting the state to a new object. If properties from the previous state object are not changed, they need to simply be copied, which is done by copying those properties into a new object and setting that as the new state.
const App = ()=>
{
  const [clicks, setClicks] = useState({
    left:1,
    right:1
  })
  /*const handleRightClick = (props)=>{
    props.clicks.left = clicks.left +1
    setClicks(clicks)
  }*/
  const handleRightClick = ()=>{
    const c = {
      ...clicks,
      right:clicks.right+1
    }
    setClicks(c)
  }
  const handleLeftClick = ()=>{
    const c = {
      left :clicks.left+1,
      right:clicks.right
    }
    setClicks(c)
  }
  return(
    <div>
    {clicks.left}<button onClick={handleLeftClick}>Left</button>
    <button onClick={handleRightClick} clicks={clicks}>Right</button>{clicks.right}
    </div>
  )
}
export default App