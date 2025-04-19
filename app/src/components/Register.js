import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import "./Register.css";

function Register() {
  const txtusername = useRef("");
  const txtpassword = useRef("");
  const txtconfirmpassword = useRef("");
  const chkterm = useRef("");
  const [msgText, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("# handle submit");

    const _replit_url = "https://60fecbef-a7bd-49a4-8277-3d1ecf61d2d5-00-1sevyde8z4qae.picard.replit.dev";
    const _url = `${_replit_url}/register`;

    const _uid = txtusername.current.value.trim();
    const _pwd = txtpassword.current.value.trim();
    const _confirmpwd = txtconfirmpassword.current.value.trim();
    const _chkterm = chkterm.current.checked;

    if (!_uid) return setMsg("* invalid username");
    if (!_pwd) return setMsg("* invalid password");
    if (_pwd !== _confirmpwd) return setMsg("* confirm password does not match password");
    if (!_chkterm) return setMsg("* please accept terms and services");

    const _post_data = { username: _uid, password: _pwd };

    fetch(_url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(_post_data),
    })
      .then((res) => res.json())
      .then((data) => {
        setMsg(data.msg);

        if (data.register === true) {
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
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input ref={txtusername} type="text" placeholder="Enter username" maxLength={25} />

          <label>Password</label>
          <input ref={txtpassword} type="password" placeholder="Enter password" maxLength={25} />

          <label>Confirm Password</label>
          <input ref={txtconfirmpassword} type="password" placeholder="Confirm password" maxLength={25} />

          <div className="terms">
            <input type="checkbox" ref={chkterm} />
            <span>I agree to the Terms and Services</span>
          </div>

          {msgText && <p className="register-error">{msgText}</p>}

          <button type="submit">Register</button>
        </form>

        <div className="register-links">
          <Link to="/login">Login</Link>
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;