import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Asegúrate de que react-bootstrap esté instalado
import myImg from "../../Assets/avatar.svg"; // Asegúrate de que la ruta sea correcta
import Tilt from "react-parallax-tilt"; // Asegúrate de que react-parallax-tilt esté instalado
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io"; // Importa el ícono de WhatsApp

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DÉJAME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Soy un apasionado programador web con experiencia en JavaScript. A
              lo largo de mi carrera, he adquirido conocimientos sólidos en
              <i>
                <b className="purple"> Node.js </b>
              </i>
              y
              <i>
                <b className="purple"> React.js</b>
              </i>
              , y me he especializado en el desarrollo de aplicaciones con
              <i>
                <b className="purple"> Next.js.</b>
              </i>
              <br />
              <br />
              Mi enfoque principal está en crear soluciones web innovadoras,
              utilizando tecnologías modernas para desarrollar productos
              eficientes y escalables.
              <br />
              <br />
              Siempre me motiva explorar nuevas tendencias en el mundo del
              desarrollo web y me esfuerzo por entregar productos de alta
              calidad que resuelvan problemas reales. Mi pasión por la
              programación se refleja en cada proyecto, y siempre busco formas
              de optimizar el rendimiento y la experiencia del usuario.
              <br />
              <br />
              ¡Espero tener la oportunidad de colaborar en proyectos
              interesantes y seguir creciendo como profesional!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUENTRAME EN:</h1>
            <p>
              Puedes<span className="purple"> conocer más de mí </span>en las
              siguientes redes sociales
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://wa.me/50242140797"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <IoLogoWhatsapp size={30} />{" "}
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/oscar27jimenez"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/oscar27jimenez/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/oscar27jimenez"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
