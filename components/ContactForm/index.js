import { useState } from "react";
import { sendEmail } from "../../shared/api";

const ContactForm = () => {
  const [data, setData] = useState({
    firstName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    lastName: "",
    message: "",
    response: null,
    error: {},
  });

  // destructuring state for using in UI
  const {
    firstName,
    phoneNumber,
    email,
    subject,
    lastName,
    message,
    response,
    error,
  } = data;

  function changeHandler(e) {
    error[e.target.name] = "";

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    const { firstName, phoneNumber, email, subject, lastName, message, error } =
      data;

    if (firstName === "") {
      error.firstName = "Please enter your name";
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
      error.firstName === "" &&
      error.phoneNumber === "" &&
      error.email === "" &&
      error.lastName === "" &&
      error.subject === "" &&
      error.message === ""
    ) {
      const emailData = data;
      emailData.recipient = "vajresh005@gmail.com";
      setData({
        ...data,
        response: {
          loading: "Sending your message...",
        },
      });
      sendEmail(emailData)
        .then((res) => {
          setData({
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            subject: "",
            message: "",
            response: {
              success: res.success || null,
              error: res.error || null,
            },
            error: {},
          });
        })
        .then(() => {
          setTimeout(() => {
            setData(
              {
                ...data,
                response: null,
              },
              2000
            );
          });
        })
        .catch((err) => {
          console.log(err);

          setData({
            ...data,
            response: { error: "Something went wrong" },
          });
        });
    }
  }

  return (
    <form onSubmit={submitHandler} className={`form`}>
      <div className={`row`}>
        <div className={`col-lg-6 col-md-12`}>
          <div className={`form-field`}>
            <input
              value={firstName}
              onChange={changeHandler}
              type="text"
              name="firstName"
              className={`p-1`}
              placeholder="First Name"
            />
            <p>{error.firstName ? error.firstName : ""}</p>
          </div>
        </div>

        <div className={`col-lg-6 col-md-12`}>
          <div className={`form-field`}>
            <input
              value={lastName}
              onChange={changeHandler}
              type="text"
              name="lastName"
              className={`p-1`}
              placeholder="Last Name"
            />
            <p>{error.lastName ? error.lastName : ""}</p>
          </div>
        </div>

        <div className={`col-lg-6 col-md-12`}>
          <div className={`form-field`}>
            <input
              onChange={changeHandler}
              value={email}
              type="email"
              name="email"
              className={`p-1`}
              placeholder="Email"
            />
            <p>{error.email ? error.email : ""}</p>
          </div>
        </div>

        <div className={`col-lg-6 col-md-12`}>
          <div className={`form-field`}>
            <input
              value={phoneNumber}
              onChange={changeHandler}
              type="tel"
              name="phoneNumber"
              className={`p-1`}
              placeholder="Phone Number"
            />
            <p>{error.phoneNumber ? error.phoneNumber : ""}</p>
          </div>
        </div>

        <div className={`col-lg-12`}>
          <div className={`form-field`}>
            <input
              onChange={changeHandler}
              value={subject}
              type="text"
              name="subject"
              className={`p-1`}
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
              className={`p-1`}
              placeholder="Message"
            ></textarea>
            <p>{error.message ? error.message : ""}</p>
          </div>
        </div>

        {response && (
          <div className="col-lg-12 d-flex justify-content-center">
            <div
              className={`${response.success && "alert alert-success"} ${
                response.error && "alert alert-danger"
              } ${response.loading && "alert alert-info"}`}
            >
              {response.success || response.error || response.loading}
            </div>
          </div>
        )}

        <div className={`col-lg-12`}>
          <div className="form-submit d-flex justify-content-center">
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
