import "./contact.css";

import React from "react";

import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_dafadnt",
      "template_iz37som",
      form.current,
      "LHbgMFkTnr4nGEKCz"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>Alexander</h5>
            <a
              href="mailto:msumba83@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send Me a message
            </a>
          </article>
          <article className="contact-option">
            <BsMessenger className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>Alexander Msumba</h5>
            <a
              href="https://m.me/alexander.msumbah"
              target="_blank"
              rel="noreferrer"
            >
              Send Me a message
            </a>
          </article>
          <article className="contact-option">
            <RiWhatsappFill className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>Alexander</h5>
            <a
              href="https://api.whatsapp.com/send?phone+270826661222"
              target="_blank"
              rel="noreferrer"
            >
              Send Me a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
