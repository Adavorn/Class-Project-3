import { useState, useEffect } from "react";

function ContactUs() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    console.log("#App::ContactUs page load");
  }, []);


  const lnkClear = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setComment("");
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    const formData = {
      firstName,
      lastName,
      email,
      comment,
    };

    console.log("Form submitted with data:", formData);

    setFirstName("");
    setLastName("");
    setEmail("");
    setComment("");
  };

  return (
    <div className="app-center-page">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <span>First Name: *</span>
          <input
            type="text"
            maxLength={25}
            placeholder="* first name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <span>Last Name: </span>
          <input
            type="text"
            maxLength={25}
            placeholder="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <span>Email: *</span>
          <input
            type="text"
            maxLength={100}
            placeholder="* email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <span>Comment: *</span>
          <br />
          <textarea
            rows={5}
            cols={30}
            maxLength={100}
            placeholder="* comment"
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <p></p>
          <button type="submit">Submit</button>{" "}
          <a href="#" onClick={lnkClear}>
            clear
          </a>
        </div>
      </form>
      <p></p>
        <p>Footer @ 2025</p>
      </div>
  );
}

export default ContactUs;
  