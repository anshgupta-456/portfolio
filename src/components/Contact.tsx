import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          {/* Contact Details */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:anshgupta456ansh@gmail.com" data-cursor="disable">
                anshgupta456ansh@gmail.com
              </a>
            </p>

            <h4>Phone</h4>
            <p>
              <a href="tel:+919311522763" data-cursor="disable">
                +91 9311522763
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/anshgupta-456"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/ansh-gupta-7b9a92291/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            
            <a
              href="https://www.instagram.com/_ansshhh_007/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>

          {/* Footer */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ansh Gupta</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
