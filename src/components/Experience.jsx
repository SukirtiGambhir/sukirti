import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import "./CSS/About.css";
import "./CSS/Experience.css";

function Experience() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sukirt Gambhir - Experience</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="about-wrapper">
        <div className="about-left animate__animated animate__zoomIn">
          <h3>Experience</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>03</strong>
          </h4>
        </div>
        <div className="about-right animate__animated animate__fadeIn animate__slower py-3">
          <div className="box">
            <div className="box1">
              <h2>Solitaire Infosys Pvt. Ltd. </h2>
              <p>July 2022 - Aug 2022</p>
              <p>
                <b>Tech Stack:</b> Python
              </p>
              <p>
                During my summer training, I had the opportunity to work on
                desktop voice assistant. This project allowed me to apply my
                skills and gain valuable practical experience in a real-world
                setting.PyCharm IDE is used along with modules like
                pyttsx3,Speechrecognition,datetime,OS,web browser. To summarize,
                this script is a basic voice-controlled virtual assistant that
                can perform tasks like searching Wikipedia, opening websites,
                playing local music files, checking the time, opening VS Code,
                and sending emails. It uses the `pyttsx3` library for
                text-to-speech and the `speech_recognition` library for speech
                recognition. The assistant responds to voice commands and
                performs actions accordingly.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Experience;
