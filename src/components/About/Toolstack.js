import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiMacos,
  SiWindows,
  SiRailway,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiWindows />, name: "Windows" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiRailway />, name: "Railway" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          style={{ position: "relative", textAlign: "center" }}
        >
          <div className="icon-container">
            {tool.icon}
            <span className="tech-tooltip">{tool.name}</span>
          </div>
        </Col>
      ))}
      <style jsx>{`
        .tech-icons {
          font-size: 3rem;
          cursor: pointer;
        }

        .icon-container {
          position: relative;
          display: inline-block;
        }

        .tech-tooltip {
          visibility: hidden;
          background-color: rgba(0, 0, 0, 0.8);
          color: #fff;
          text-align: center;
          padding: 10px;
          border-radius: 8px;
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          font-size: 1.2rem;
          font-weight: bold;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .icon-container:hover .tech-tooltip {
          visibility: visible;
          opacity: 1;
        }
      `}</style>
    </Row>
  );
}

export default Toolstack;
