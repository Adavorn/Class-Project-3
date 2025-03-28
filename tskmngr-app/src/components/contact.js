import {useEffect} from "react"

function ContactUs() {


    useEffect(()=>{
  
      console.log("#App::ContactUs page load")
  
    },[]) 
  
    return (
      <>
        <div className="app-center-page">  
          <h2>Contact Us</h2>
          <form>
              <div> 
                  <span>First Name: *</span> 
                  <input type="text" maxLength={25} placeholder="* first name" required/>
                  <br/>
                  <span>Last Name: </span> 
                  <input type="text" maxLength={25} placeholder="last name"/>
                  <br/>
                  <span>Email: *</span> 
                  <input type="text" maxLength={100} placeholder="* email" required/>
                  <br/>
                  <span>Comment: *</span> 
                  <br/><textarea rows={5} cols={30} maxLength={100} placeholder="* comment" required></textarea>
                  <p></p>
                  <button>Submit</button> {" "} <a>clear</a>
              </div>
          </form>
      </div>
      </>
    );
  }
  
  export default ContactUs;
  