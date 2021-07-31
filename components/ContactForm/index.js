import { useState } from "react";
import { sendEmail } from "../../shared/api";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    lastName: "",
    message: "",
    error: {},
  });

  // destructuring state for using in UI
  const { name, phoneNumber, email, subject, lastName, message, error } = data;

  function changeHandler(e) {
    error[e.target.name] = "";

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    const { name, phoneNumber, email, subject, lastName, message, error } =
      data;

    if (name === "") {
      error.name = "Please enter your name";
    }
    if (phoneNumber === "") {
      error.name = "Please enter correct phone number";
    }
    if (email === "") {
      error.email = "Please enter your email";
    }
    if (subject === "") {
      error.subject = "Please enter your subject";
    }
    if (lastName === "") {
      error.lastName = "Please enter your Lastname";
    }
    if (message === "") {
      error.message = "Please enter your message";
    }

    if (error) {
      setData({
        ...data,
        error,
      });
    }

    if (
      error.name === "" &&
      error.phoneNumber === "" &&
      error.email === "" &&
      error.lastName === "" &&
      error.subject === "" &&
      error.message === ""
    ) {
      setData({
        name: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
        error: {},
      });

      const emailData = data;
      emailData.recipient = "vajresh005@gmail.com";

      sendEmail(emailData).then((res) => {
        console.log(res);
      });
    }
  }

  return (
    <form onSubmit={submitHandler} className={`form`}>
      <div className={`row`}>
        <div className={`col-lg-6 col-md-12`}>
          <div className={`form-field`}>
            <input
              value={name}
              onChange={changeHandler}
              type="text"
              name="name"
              placeholder="Name"
            />
            <p>{error.name ? error.name : ""}</p>
          </div>
        </div>
        <div className={`col-lg-6 col-md-12`}>
          <div className={`form-field`}>
            <input
              value={lastName}
              onChange={changeHandler}
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
            <p>{error.lastName ? error.lastName : ""}</p>
          </div>
        </div>
        <div className={`col-lg-6 col-md-12`}>
          <div className={`form-field`}>
            <input
              value={phoneNumber}
              onChange={changeHandler}
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
            />
            <p>{error.phoneNumber ? error.phoneNumber : ""}</p>
          </div>
        </div>
        <div className={`col-lg-12`}>
          <div className={`form-field`}>
            <input
              onChange={changeHandler}
              value={email}
              type="email"
              name="email"
              placeholder="Email"
            />
            <p>{error.email ? error.email : ""}</p>
          </div>
        </div>
        <div className={`col-lg-12`}>
          <div className={`form-field`}>
            <input
              onChange={changeHandler}
              value={subject}
              type="text"
              name="subject"
              placeholder="Subject"
            />
            <p>{error.subject ? error.subject : ""}</p>
          </div>
        </div>
        <div className={`col-lg-12`}>
          <div className={`form-field`}>
            <textarea
              onChange={changeHandler}
              value={message}
              name="message"
              placeholder="Message"
            ></textarea>
            <p>{error.message ? error.message : ""}</p>
          </div>
        </div>
        <div className={`col-lg-12`}>
          <div className="form-submit">
            <button type="submit" className="theme-btn">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ContactForm;
