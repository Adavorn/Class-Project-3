function Login()
{
    return (
        <>
            <p>Login</p>
            <p></p>
            <form>
                <label>UserName: </label><input type="text" placeholder="* username" maxLength={25}></input><br/>
                <label>Password: </label><input type="password" placeholder="* password" maxLength={25}></input>
                <p></p>
                <button>Submit</button>
            </form>
            <p></p>
            <p>Register</p>
        </>
    )
}

export default Login;