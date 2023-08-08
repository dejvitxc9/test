import "./Contact.css";
import { BiLogoGmail } from "react-icons/bi";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillPhone } from "react-icons/ai";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="row">
        {/* Lewa strona */}

        {/* Prawa strona */}
        <div className="col-md-6 mb-4">
          <h2 className="primary-font-color">Formularz kontaktowy</h2>
          <form name="contact" action="/contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="name"
              placeholder="imie"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="mail"
              required
            />
            <button type="submit" className="btn-custom primary-font-color">
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
