import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import techmyte from "../../Assets/Projects/techmyte.png";
import mistore from "../../Assets/Projects/mistore.png";
import cryptox from "../../Assets/Projects/cryptox.png";

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
              imgPath={mistore}
              isBlog={false}
              title="Mi-Store-Clone"
              description="Explore the world of e-commerce with our React-based project, a clone of Mi Store India. Dive into the realm of web development while mastering React skills. Discover how to replicate the functionality of a popular online store, honing your coding abilities in the process. Learn, create, and innovate with us!"
              ghLink="https://github.com/mohittguptaa/MI-store"
              demoLink="https://mi-store-one.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techmyte}
              isBlog={false}
              title="TechMyte"
              description="Our project is a stunningly designed landing page, meticulously crafted to captivate audiences with its beauty. It boasts seamless responsiveness across all devices, ensuring an immersive experience for users on desktops, tablets, and mobile phones. Welcome to a world where aesthetics meet functionality effortlessly."
              ghLink="https://github.com/mohittguptaa/techmyte.git"
              demoLink="https://techmyte.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptox}
              isBlog={false}
              title="TechMyte"
              description="Our crypto app revolutionizes the way users engage with digital currencies. Offering real-time exchange rates and dynamic graphs for all coins, it provides comprehensive insights at your fingertips. With seamless responsiveness across devices, stay informed and make informed decisions in the fast-paced world of cryptocurrency trading."
              ghLink="https://github.com/mohittguptaa/cryptox"
              demoLink="https://cryptox-india.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
