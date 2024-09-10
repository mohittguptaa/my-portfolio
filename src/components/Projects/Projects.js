import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import techmyte from "../../Assets/Projects/zeecare.png";
import mistore from "../../Assets/Projects/mistore.png";
import cryptox from "../../Assets/Projects/cryptox.png";
import Tracker from "../../Assets/Projects/tracker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tracker}
              isBlog={false}
              title="Real Time Device Tracking App "
              description="Developed a real-time device tracking application using Node.js, Express, EJS, Leaflet, and Socket.io, enabling continuous.location monitoring with high accuracy.Integrated geolocation tracking and real-time map updates utilizing watchPosition and Leaflet, enhancing user interaction and live device tracking."
              ghLink="https://github.com/mohittguptaa/Realtime-Location-Tracker"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techmyte}
              isBlog={false}
              title="ZEECARE HOSPITAL"
              description="This project is a comprehensive full-stack Hospital Management System built on the MERN (MongoDB, Express.js, React, Node.js) stack. It streamlines administrative and medical operations, ensuring efficient patient management, appointment scheduling, and record-keeping, ultimately enhancing healthcare delivery."
              ghLink="https://github.com/mohittguptaa/Hospital_MAnagement_System.git"
              demoLink="https://zeecaree.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptox}
              isBlog={false}
              title="CRYPTO X"
              description="crypto app revolutionizes the way users engage with digital currencies. Offering real-time exchange rates and dynamic graphs for all coins, it provides comprehensive insights at your fingertips. With seamless responsiveness across devices, stay informed and make informed decisions in the fast-paced world of cryptocurrency trading."
              ghLink="https://github.com/mohittguptaa/cryptox"
              demoLink="https://cryptox-india.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mistore}
              isBlog={false}
              title="Mi-Store-Clone"
              description="Explore the world of e-commerce with our React-based project, a clone of Mi Store India. Dive into the realm of web development while mastering React skills. Discover how to replicate the functionality of a popular online store, honing your coding abilities in the process. Learn, create, and innovate with us!"
              ghLink="https://github.com/mohittguptaa/MI-store"
              demoLink="https://mi-store-one.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
