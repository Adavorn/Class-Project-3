function Register()
{
    return (
        <>
            <p>Register</p>
            <p></p>
            <form>
                <label>* UserName: </label><input type="text" placeholder="* username" maxLength={25}></input><br/>
                <label>* Password: </label><input type="password" placeholder="* password" maxLength={25}></input><br/>
                <label>* Confirm Password: </label><input type="password" placeholder="* confirm password" maxLength={25}></input>
                <p></p>
                <input type="checkbox"/>Terms and Services
                <p></p>
                <button>Submit</button>
            </form>
            <p></p>
            <p>Login</p>
        </>
    )
}

export default Register;