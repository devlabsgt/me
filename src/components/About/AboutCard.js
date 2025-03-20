import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Oscar Jiménez</span>,
            Desarrollador web FullStack por pasión e
            <span className="purple"> Ingeniero en Sistemas</span>, actualmente
            Curso Maestría <span className="purple">(Magister Atrium)</span> en
            Seguridad Informática.
            <br />
            Además de programar, disfruto explorar nuevas ideas y mejorar
            continuamente.
            <br />
            <br />
            ¡Algunas otras actividades que me encanta hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Escuchar audiolibros
            </li>
            <li className="about-activity">
              <ImPointRight /> Escribir
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "La suerte es lo que sucede cuando la preparación se encuentra con
            la oportunidad."{" "}
          </p>
          <footer className="blockquote-footer">Séneca</footer>
          <p style={{ color: "rgb(155 126 172)" }}>
            "La oportunidad va a llegar, sé dueño de tu suerte preparando la
            mejor versión de ti"{" "}
          </p>
          <footer className="blockquote-footer">Oscar Jiménez</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
