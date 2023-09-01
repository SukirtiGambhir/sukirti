import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import "./CSS/About.css";

function About() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sukirti Gambhir - About</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="about-wrapper">
        <div className="about-left animate__animated animate__zoomIn">
          <h3>About</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>02</strong>
          </h4>
        </div>
        <div className="about-right animate__animated animate__fadeIn animate__slower py-3">
          <p>
            Hello! My name is Sukirti Gambhir and I'm a final year student
            pursuing Bachelor of Engineering in Information technology at
            Chandigarh Group of Colleges, Landran. During my academic journey, I
            have enthusiastically explored the field of engineering, always
            curious to learn more and eager to gain knowledge. This has led me
            to acquire a diverse set of skills and achieve significant
            accomplishments, making my engineering experience truly exciting and
            fulfilling.
          </p>
          <p>
            I possess a robust understanding of Object-Oriented Programming
            (OOPs) principles, allowing me to design modular and maintainable
            software systems. Additionally, my proficiency in Data Structures
            and Algorithms (DSA) empowers me to optimize performance and
            efficiency in code implementations.
            </p>
            <p>
            With a keen eye for data
            organization and management, I am well-versed in Database Management
            Systems (DBMS).Proficient in SQL and Excel, I leverage advanced
            querying and data manipulation techniques to extract valuable
            insights from complex datasets. With Excel, I create powerful
            visualizations and automate data-driven processes, enhancing
            decision-making efficiency.
          </p>
          <p>
            As I approach the crossroads of my academic journey, I am excited to
            embrace new challenges and collaborate with industry professionals
            who share my passion for technological innovation. I am eager to
            contribute my skills and knowledge to meaningful projects that leave
            a lasting impact.
          </p>
          <p>
            Thank you for visiting my portfolio. I look forward to engaging in
            discussions and exploring opportunities that align with my interests
            and aspirations.
          </p>
          &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
        </div>
      </Container>
    </>
  );
}

export default About;
