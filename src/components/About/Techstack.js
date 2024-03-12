import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiFirebase } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="70"
          height="70"
          viewBox="0 0 16 16"
        >
          <polygon
            fill="#ffffff"
            points="15.973,3 14.77,3 12,7.133 9.23,3 8.027,3 11.398,8.031 8.069,13 9.272,13 12,8.929 14.728,13 15.931,13 12.602,8.031"
          ></polygon>
          <path
            fill="#ffffff"
            d="M6.81,10c-0.005,0.013-0.006,0.027-0.011,0.039C6.354,11.212,5.229,12,3.967,12	C2.331,12,1,10.638,1,8.964V8h4.439v0H8V7H7.997c-0.019-2.208-1.788-4-4.03-4C1.779,3,0,4.811,0,7.036v1.929C0,11.19,1.779,13,4,13	c1.644,0,3.144-1.048,3.734-2.607C7.783,10.265,7.81,10.131,7.845,10H6.81z M4.033,4c1.624,0,2.944,1.343,2.963,3H1.003	C1.022,5.343,2.343,4,4.033,4z"
          ></path>
        </svg>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
    </Row>
  );
}

export default Techstack;
