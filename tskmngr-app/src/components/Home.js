import {Link} from "react-router-dom"


function Home() {
    return (
      <>
        <h3>Demo Task Manager App</h3>
        <p></p>
        <div>
            <input type="text" maxLength={25} placeholder="* add item"/>
            {" "} <button>Add</button> {" "} <a>clear</a>
            <p></p>
        </div>
        <Link to="/contactus">Contact Us</Link>
        <p></p>
        <a href="#0">all</a> {"|"} 
        <a href="#1">complete</a> {"|"} 
        <a href="#2">in-complete</a> {"|"} 
        <p></p>
        <div>
          <span>[]itema -x- </span><br/>
          <span>[x]itemb -x- </span><br/>
          <span>[]itemc -x- </span><br/>
          <span>[x]itemd -x- </span><br/>
        </div>
        <p>footer @ 2025</p>
      </>

    );
  }
  
  export default Home;