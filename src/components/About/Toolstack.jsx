import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiWindows,
  SiNetlify,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <h6>Windos</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>VS Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h6>PostMan</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h6>vercel</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h6>Netlify</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
