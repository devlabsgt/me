import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiJira,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const techs = [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <SiJira />, name: "Scrum / Agile" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          style={{ position: "relative", textAlign: "center" }}
        >
          <div className="icon-container">
            {tech.icon}
            <span className="tech-tooltip">{tech.name}</span>
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

export default Techstack;
