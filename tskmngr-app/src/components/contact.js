function ContactUs() {
  return (
    <>
      <p>Contact Us</p>
      <form>
          <div> 
              <span>first name: </span> <input type="text" maxLength={25} placeholder="* first name"/>
              <br/>
              <span>last name: </span> <input type="text" maxLength={25} placeholder="last name"/>
              <br/>
              <span>email: </span> <input type="text" maxLength={100} placeholder="* email"/>
              <p></p>
              <button>submit</button> {" "} <a href="#">clear</a>
          </div>
      </form>
    </>
  );
}

export default ContactUs;