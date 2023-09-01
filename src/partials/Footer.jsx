import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail } from "react-icons/ai";
import "./CSS/Footer.css";

function Footer() {
  return (
    <>
      <footer className="px-4">
        <div className="foot-left d-flex">
          <p>Sukirti Gambhir &copy; 2023</p>
        </div>
        <div className="foot-right d-flex">
          <a
            href="https://github.com/SukirtiGambhir"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="foot-icon" />
            &nbsp;&nbsp;GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sukirti-gambhir/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="foot-icon" />
            &nbsp;&nbsp;Linkedin
          </a>
          <a
            href="mailto:sukirtigambhir@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillMail className="foot-icon" />
            &nbsp;&nbsp;Gmail
          </a>
          <a
            href="https://www.instagram.com/sukirti_gambhir/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="foot-icon" />
            &nbsp;&nbsp;Instagram
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
