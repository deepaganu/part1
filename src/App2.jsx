/**
 * Adding another component inside the root to display
 * how data can be passed from the the root to the component
 * App---->Hello 
 * 1. introduce only name 
 * 2. ask students to add age and gender
 * 3. Pass it from App
 * 4. Create a list and pass it from there 
 * 5. There can't be more than one root element (remove the outermost <div> to check it)
 */
import Hello from "./components/Hello"
const App = ()=>{
    const hobbies = ["reading","writing","sleeping"]
    return (
        
        <><h1>Greeting to everyone</h1><p>I am wondering about saying Hello</p><Hello name="deepa" hobbies={hobbies} /><Hello name="Abhishek" hobbies={hobbies} /></>
    
    )

}
export default App