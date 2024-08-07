const Hello1 = (props)=>
{
 /* const name = props.name
  const age = props.age*/
  // after destructuring it becomes 
  const {name,age} = props
  /*const year = ()=>
  {
    const yearNow = new Date().getFullYear()
    return yearNow - age
    //If an arrow function contains a single expression we dont need to use the curly braces or a return keyword
  }*/
  // the code below is called as destructuring of the code
  const year = ()=> new Date().getFullYear() - age
  return(
    <div>
    <p> Hello, {props.name}, you are {props.age} years old.</p>
    <p>You were born in {year()}</p>
    </div>
  )
}
const App = () =>
{
  const name = "Kala"
  const age = 10
  return(
    <>
    <h1>Greetings to </h1>
    <Hello1 name={name} age={age} />
    <Hello1 name="Priya" age={10+45} />
    </>
  )
}
export default App