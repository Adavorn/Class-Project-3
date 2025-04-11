import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function Login()
{
    //lgoto a page/route in code - ie:redirect 
    let navigate = useNavigate();

    const txtusername = useRef("")
    const txtpassword = useRef("")
    const [msgText, setMsg] = useState("")

    const handleLogin = (e)=>{

        e.preventDefault()

        console.log("# handleLogin")
        console.log(`# username: ${txtusername.current.value} password: ${txtpassword.current.value}`)

        let _msg = "";
        let _replit_url = "https://60fecbef-a7bd-49a4-8277-3d1ecf61d2d5-00-1sevyde8z4qae.picard.replit.dev";
    
        const _uid = txtusername.current.value
        const _pwd = txtpassword.current.value
        
        //const _url = `http://localhost:8080/login/${_uid}/${_pwd}`;  
        const _url = `${_replit_url}/login/${_uid}/${_pwd}`;  

        if(_uid === null || _uid.trim().length === 0)
        {
            _msg = "* invalid username";                
            setMsg(_msg)                
            return false;
        }
        
        if(_pwd === null || _pwd.trim().length === 0)
        {
            _msg = " * invalid password";                
            setMsg(_msg)                
            return false;
        }
        
        fetch(_url)
        .then((res)=>res.json())
        .then((data)=> {
            
            if(data.login === true)
            {
                console.log("# navigate to dashbpoard")
                navigate("/dashboard",{replace:true})
            }

            setMsg(data.msg)
        })
        .catch((error)=>{
            setMsg("* request error");
            console.log("* request error *");
            console.log(error);
        });

        txtusername.current.value = "";
        txtpassword.current.value = "";

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