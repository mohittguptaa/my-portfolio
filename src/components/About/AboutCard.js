import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohit Gupta </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />
            I am currently Doing Btech in Computer Science Engineering From 
            <br />
            Modern Institute of technology and Research Center Alwar,Rajasthan
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Experts were once amateurs who kept practicing."{" "}
          </p>
          <footer className="blockquote-footer">Amit Kalantri </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
