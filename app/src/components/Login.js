import { Link } from "react-router-dom";
import { useRef, useState } from "react";

function Login()
{
    const txtusername = useRef("")
    const txtpassword = useRef("")
    const [msgText, setMsg] = useState("")

    const handleLogin = (e)=>{

        e.preventDefault()

        console.log("# handleLogin")
        console.log(`# username: ${txtusername} password: ${txtpassword}`)
        
        //validae field

        //fetch api request 
    }

    return (
        <>
            <p>Login</p>
            <p></p>
            <form>
                <label>UserName: </label><input ref={txtusername} type="text" placeholder="* username" maxLength={25}></input><br/>
                <label>Password: </label><input ref={txtpassword} type="password" placeholder="* password" maxLength={25}></input>
                <p></p>
                <p>{msgText}</p>
                <p></p>
                <button onClick={(e)=>handleLogin(e)}>Submit</button>
            </form>
            <p></p>
            <Link to="/register">Register</Link>
            <p></p>
            <Link to="/">Home</Link>
        </>
    )
}

export default Login;