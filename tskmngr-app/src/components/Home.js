import {Link} from "react-router-dom"


function Home() {
    return (
      <>
        <p>Demo Task Manager App v1.0.5</p>
        <p></p>
        <div>
            <input type="text" maxLength={25} placeholder="* add item"/>
            {" "} <button>Add</button> {" "} <a>clear</a>
            <p></p>
        </div>
        <Link to="/contactus">Contact Us</Link>
        <p></p>
        <p>footer @ 2025</p>
      </>

    );
  }
  
  export default Home;