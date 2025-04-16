import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

function Register() {
    const txtusername = useRef("");
    const txtpassword = useRef("");
    const txtconfirmpassword = useRef("");
    const chkterm = useRef("");
    const [msgText, setMsg] = useState("");

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("# handle submit");

        let _msg = "";
        const _replit_url = "https://60fecbef-a7bd-49a4-8277-3d1ecf61d2d5-00-1sevyde8z4qae.picard.replit.dev";
        const _url = `${_replit_url}/register`;

        const _uid = txtusername.current.value;
        const _pwd = txtpassword.current.value;
        const _confirmpwd = txtconfirmpassword.current.value;
        const _chkterm = chkterm.current.checked;

        if (!_uid || _uid.trim().length === 0) {
            setMsg("* invalid username");
            return;
        }

        if (!_pwd || _pwd.trim().length === 0) {
            setMsg("* invalid password");
            return;
        }

        if (_pwd !== _confirmpwd) {
            setMsg("* confirm password does not match password");
            return;
        }

        if (!_chkterm) {
            setMsg("* please select terms/services");
            return;
        }

        const _post_data = { username: _uid, password: _pwd };

        fetch(_url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(_post_data),

        })
        .then((res) => res.json())
        .then((data) => {
            setMsg(data.msg);

            if (data.register === true) {
                // Clear form only on successful registration
                txtusername.current.value = "";
                txtpassword.current.value = "";
                txtconfirmpassword.current.value = "";
                chkterm.current.checked = false;

                navigate("/dashboard", { replace: true });
            }
        })
        .catch((error) => {
            setMsg("* request error");
            console.error("* request error *", error);
        });
    };

    return (
        <>
            <div className="app-center-page">
                <p>Register</p>
                <form onSubmit={handleSubmit}>
                    <label>* UserName: </label>
                    <input ref={txtusername} type="text" placeholder="* username" maxLength={25} /><br />

                    <label>* Password: </label>
                    <input ref={txtpassword} type="password" placeholder="* password" maxLength={25} /><br />

                    <label>* Confirm Password: </label>
                    <input ref={txtconfirmpassword} type="password" placeholder="* confirm password" maxLength={25} />
                    <p></p>

                    <input type="checkbox" ref={chkterm} /> Terms and Services
                    <p>{msgText}</p>

                    <button>Submit</button>
                </form>

                <p></p>
                <Link to="/login">Login</Link>
                <p></p>
                <Link to="/">Home</Link>
            </div>
        </>
    );
}

export default Register;