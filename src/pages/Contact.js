import React from "react";
import Navbar from "../components/Navbar";
import "../style.scss";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="contact-me" id="contact">
        <div className="main-title">
          <h2>Contact me </h2>
        </div>
        <h4>you can contact me through</h4>
        <div className="contacts">
          <div className="card2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/0201029404662"
            >
              <i className="fa-brands fa-square-whatsapp" />
            </a>
            <h4>whatsapp</h4>
            <p>contact with me on whatsapp</p>
          </div>
          <div className="card2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/93amr.kakashi/"
            >
              <i className="fa-brands fa-facebook" />
            </a>
            <h4>facebook</h4>
            <p>contact with me on facebook</p>
          </div>
          <div className="card2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/amr-ali-mohamed-88192b241/"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
            <h4>linked in</h4>
            <p>contact with me on linked in</p>
          </div>
          <div className="card2">
            <a href="mailto:93amr.kakashi@gmail.com">
              <i className="fa-brands fa-square-google-plus" />
            </a>
            <h4>gmail</h4>
            <p>contact with me on gmail</p>
          </div>
          <div className="card2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/93amr.kakashi/"
            >
              <i className="fa-brands fa-square-instagram" />
            </a>
            <h4>instgram</h4>
            <p>contact with me on instgram</p>
          </div>
          <div className="card2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/93amrkakashi"
            >
              <i className="fa-brands fa-github" />
            </a>
            <h4>git hub</h4>
            <p>contact with me on git hub</p>
          </div>
        </div>
        
      </section>

      <Footer />
    </>
  );
};

export default Contact;
