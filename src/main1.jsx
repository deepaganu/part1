import ReactDOM from "react-dom/client";
import App from "./App"
let counter = 20
const root = ReactDOM.createRoot(document.getElementById("root"))
const j = setInterval(()=>{
    console.log(counter)
    if(counter >= 30){
        clearInterval(j)}
    else{
    root.render(<App counter = {counter}/>)
    counter = counter+1}
},1000)