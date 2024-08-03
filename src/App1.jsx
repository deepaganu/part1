const App1 = ()=>{
    const now = new Date()
    const a = 10
    const b = 20 
    console.log("Hello I am here")
    return(
        <div>
            <p> Hello World. It is now {now.toString()}</p>
            <h2>It is {now.getDate()}/{now.getMonth()}/{now.getFullYear()}</h2>
            <code>
                {a} + {b} = {a+b}
            </code>
        </div>
    )
}
export default App