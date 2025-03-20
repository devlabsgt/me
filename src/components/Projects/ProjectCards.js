import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaHandPointRight } from "react-icons/fa"; // Ícono de dedito

function ProjectCards(props) {
  return (
    <Card
      className="project-card-view"
      style={{
        cursor: props.demoLink ? "pointer" : "default",
      }}
      onClick={() => {
        if (props.demoLink) {
          window.open(props.demoLink, "_blank", "noopener,noreferrer");
        }
      }}
    >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Muestra el botón solo si existe un demoLink */}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            onClick={(e) => e.stopPropagation()} // Evita doble activación del evento click
          >
            {"Haz click para ver"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
