import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

function Login() {
    const navigate = useNavigate();
    const txtusername = useRef("");
    const txtpassword = useRef("");
    const [msgText, setMsg] = useState("");

    const handleLogin = (e) => {
        e.preventDefault(); // Stop default form behavior

        console.log("# handleLogin");

        const _uid = txtusername.current.value.trim();
        const _pwd = txtpassword.current.value.trim();

        if (_uid.length === 0) {
            setMsg("* invalid username");
            return;
        }

        if (_pwd.length === 0) {
            setMsg("* invalid password");
            return;
        }

        const _replit_url = "https://60fecbef-a7bd-49a4-8277-3d1ecf61d2d5-00-1sevyde8z4qae.picard.replit.dev";
        const _url = `${_replit_url}/login/${_uid}/${_pwd}`;

        console.log(`# making API call to: ${_url}`);

        fetch(_url)
            .then(async (res) => {
                const text = await res.text();
                console.log("Raw response text:", text);

                try {
                    const data = JSON.parse(text);
                    console.log("API response:", data);

                    if (data.login === true) {
                        console.log("# navigating to /dashboard");
                        navigate("/dashboard", { replace: true });
                    }

                    setMsg(data.msg || "Unknown response");
                } catch (err) {
                    console.error("❌ Failed to parse JSON:", err);
                    setMsg("* invalid JSON response from server");
                }
            })
            .catch((error) => {
                setMsg("* request error");
                console.error("* request error *", error);
            });

        // Clear inputs
        txtusername.current.value = "";
        txtpassword.current.value = "";
    };

    return (
        <>
            <p>Login</p>
            <form onSubmit={handleLogin}>
                <label>UserName: </label>
                <input
                    ref={txtusername}
                    type="text"
                    placeholder="* username"
                    maxLength={25}
                /><br />

                <label>Password: </label>
                <input
                    ref={txtpassword}
                    type="password"
                    placeholder="* password"
                    maxLength={25}
                /><br />

                <p>{msgText}</p>

                <button type="submit">Submit</button>
            </form>

            <p></p>
            <Link to="/register">Register</Link>
            <p></p>
            <Link to="/">Home</Link>
        </>
    );
}

export default Login;