import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const formInitialDetails = {
    firstName: "",
    email: "",
    message: "",
  };

  // Validation function for the name field
  const validateName = (name) => {
    const isValid = name.trim() !== "";
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      isNameValid: isValid,
    }));
  };

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    // Check if email is valid
    if (!formDetails.isEmailValid) {
      setStatus({ success: false, message: "Email field cannot be empty." });
      setFormDetails(formInitialDetails);
      return;
    }

    // Check if name is valid
    if (!formDetails.isNameValid) {
      setStatus({ success: false, message: "Name field cannot be empty." });
      setFormDetails(formInitialDetails);
      return;
    }

    // Check if message is valid
    if (!formDetails.isMessageValid) {
      setStatus({ success: false, message: "You must write a message first." });
      setFormDetails(formInitialDetails);
      return;
    }

    // The rest of your sendEmail logic here
    emailjs.sendForm("service_pfrxthi", "template_5scplhe", form.current, "wwwbMjqRsCQVnyqjr").then(
      (result) => {
        console.log(result.text);
        setButtonText("Sent");
        setStatus({ success: true, message: "Message sent successfully" });
        setFormDetails(formInitialDetails);
      },
      (error) => {
        console.log(error.text);
        setButtonText("Send");
        setStatus({ success: false, message: "Something went wrong, please try again later." });
        setFormDetails(formInitialDetails);
      }
    );
  };

  // Validation function for the email field
  const validateEmail = (email) => {
    const isValid = email.trim() !== "";
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      isEmailValid: isValid,
    }));
  };

  // Validation function for the message area
  const validateMessage = (message) => {
    const isValid = message.trim() !== "";
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      isMessageValid: isValid,
    }));
  };

  // State variables
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  // Function to update form details on user input
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  // JSX for the Contact component
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Send me a message</h2>
              <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First and last name"
                      name="user_name"
                      onChange={(e) => {
                        onFormUpdate("firstName", e.target.value);
                        validateName(e.target.value);
                      }}
                    />
                  </Col>

                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email"
                      onChange={(e) => {
                        onFormUpdate("email", e.target.value);
                        validateEmail(e.target.value);
                      }}
                    />
                  </Col>

                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      name="message"
                      onChange={(e) => {
                        onFormUpdate("message", e.target.value);
                        validateMessage(e.target.value);
                      }}
                    ></textarea>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {status.message && (
                    <Col>
                      <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
