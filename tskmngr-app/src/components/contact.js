function ContactUs() {
  return (
    <>
      <h2>Contact Us</h2>
      <form>
          <div> 
              <span>first name: </span> <input type="text" maxLength={25} placeholder="* first name"/>
              <br/>
              <span>last name: </span> <input type="text" maxLength={25} placeholder="last name"/>
              <br/>
              <span>email: </span> <input type="text" maxLength={100} placeholder="* email"/>
              <br/>
              <span>comment</span>
              <br/><textarea maxLength={10} cols={20} rows={5} placeholder="* comment"></textarea>
              <p></p>
              <button>submit</button> {" "} <a href="#">clear</a>
          </div>
      </form>
    </>
  );
}

export default ContactUs;