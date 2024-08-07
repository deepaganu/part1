import "./login.css"
const Login = ()=>{
    return(
       <div className="login-container">
        <form className="login-form">
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username"/>
            </div>
            <div className="password">
                <label htmlFor="password">Password:</label>
                <input type="text" id="password"/>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
       </div>
    )
}
export default Login