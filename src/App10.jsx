import { useState } from "react"

//Handling of array 
const App = ()=>
{
  const [left,setLeft] = useState(0)
  const [right,setRight] = useState(0)
  const [allClicks,setClicks] = useState([])
  const handleLeftClick  = ()=>{
    setLeft(left+1)
    allClicks.push('L')
  }
  const handleRightClick = ()=>{
    setRight(right+1)
    allClicks.push('R')
  }
  return (
    <div>
    {left}<button onClick={handleLeftClick}>Left</button>
    <button onClick={handleRightClick}>Right</button>{right}<br/>
    <p>{allClicks.join(" ")}</p>
    </div>
  )
}
export default App