import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.webp";
import Address from "../../img/address.png";
import Email from "../../img/email.webp";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g5dagwo",
        "template_57ae9zf",
        formRef.current,
        "DfHdPzTNdRkrYE3uc"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="phone" className="c-icon" />
              <a href="tel:+91 9502675605">+91 9502675605</a>
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Email} alt="mail" className="c-icon" />
              <a href="mailto:abhiramrayidi03@gmail.com">
                abhiramrayidi03@gmail.com
              </a>
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Address} alt="address" className="c-icon" /> Guntur,
              Andhra Pradesh
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor:darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button type="submit">Submit</button>
            {done && <p>Thank you for your message!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
