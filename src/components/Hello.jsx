import Login from "./login"
const Hello = (props)=>
{
    console.log(props)
    return(
        <div>
        <h2>HI {props.name}</h2>
        <div class="dropdown-container">
        <label for="dropdown" class="dropdown-label">Choose an option:</label>
        <select id="dropdown" class="dropdown-select">
            {props.hobbies.map((hobby,index)=>(
                <option value={index}>{hobby}</option>
            ))}
            
            </select>
    </div>
</div>
    )
}
export default Hello