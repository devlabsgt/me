import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tumuniclm from "../../Assets/Projects/tumuniclm.png";
import analista from "../../Assets/Projects/analista.png";
import engineer from "../../Assets/Projects/engineer.png";
import security from "../../Assets/Projects/security.png";
import scrum from "../../Assets/Projects/scrum.png"; // Imagen para Scrum
import sistemas from "../../Assets/Projects/sistemas.png"; // Imagen para Scrum
import freelancer from "../../Assets/Projects/freelancer.png"; // Imagen para Freelancer

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Trabajos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí puedes ver un resumen de mi preparación, mis servicios y
          proyectos más recientes.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tumuniclm}
              isBlog={false}
              title="tumuniclm"
              description="El sitio web www.tumuniclm.com es un portal municipal diseñado para facilitar la comunicación entre la Municipalidad y los ciudadanos. A través de esta plataforma, 
              los habitantes pueden acceder de manera rápida y transparente a información relevante sobre la gestión municipal, incluyendo proyectos en desarrollo, obras públicas, políticas 
              gubernamentales y noticias oficiales. Este portal no solo fortalece la transparencia y la participación ciudadana, sino que también permite a la comunidad estar informada sobre 
              servicios municipales, trámites, eventos y cualquier otra actualización de interés general, promoviendo así un gobierno más cercano y accesible para todos."
              demoLink="https://tumuniclm.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sistemas} // Asegúrate de agregar la imagen correspondiente
              isBlog={false}
              title="Sistemas Internos de Gestión Municipal"
              description="Desarrollo e implementación de sistemas internos para la gestión eficiente de los recursos municipales. Estas soluciones tecnológicas permiten la organización y análisis de datos clave, facilitando la toma de decisiones informadas en áreas como administración, finanzas, infraestructura y servicios públicos. A través de la digitalización y automatización de procesos, se mejora la transparencia, la eficiencia operativa y la capacidad de respuesta de la Municipalidad a las necesidades de la comunidad."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={analista}
              isBlog={false}
              title="Analista y Desarrollador de Software Municipal"
              description="Como Analista y Desarrollador de Software Municipal, me encargo del diseño, desarrollo e implementación de soluciones tecnológicas para optimizar los procesos administrativos y operativos dentro de la Municipalidad. Mi rol incluye el análisis de requerimientos, la creación de aplicaciones web y sistemas de información que faciliten la gestión de datos, la automatización de tareas y la mejora en la comunicación con los ciudadanos. Además, trabajo en la seguridad informática y el mantenimiento de plataformas digitales, garantizando su eficiencia y accesibilidad. A través del uso de metodologías ágiles como Scrum, contribuyo a la modernización del gobierno municipal, promoviendo la transparencia, la digitalización de servicios y el acceso oportuno a la información pública."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={freelancer}
              isBlog={false}
              title="Freelancer en Desarrollo de Software"
              description="Como Freelancer en Desarrollo de Software, me especializo en la creación de soluciones tecnológicas personalizadas para empresas y emprendedores. Diseño, desarrollo e implemento aplicaciones web y sistemas eficientes utilizando tecnologías modernas como Next.js, React, Node.js y MongoDB (MERN stack), garantizando alto rendimiento, escalabilidad y seguridad. Trabajo en equipo siguiendo lineamientos de Scrum y metodologías ágiles, lo que me permite gestionar proyectos de manera organizada, optimizar tiempos de entrega y asegurar la satisfacción del cliente. Además, ofrezco asesoría en seguridad informática y arquitectura de software, enfocándome en la digitalización de procesos, la automatización de tareas y la mejora en la experiencia del usuario. Mi objetivo es transformar ideas en productos digitales innovadores que generen valor y crecimiento para mis clientes."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={engineer}
              isBlog={false}
              title="Ingeniero en Sistemas"
              description="Soy Ingeniero en Sistemas con una sólida formación en el diseño, desarrollo e implementación de soluciones tecnológicas innovadoras. A lo largo de mi carrera, he trabajado en la optimización de sistemas, análisis de datos, desarrollo de software y seguridad informática, aplicando tecnologías modernas y metodologías ágiles. Mi enfoque se basa en la eficiencia, escalabilidad y seguridad de cada solución, contribuyendo a la transformación digital y la mejora de procesos en diversas organizaciones."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={security}
              isBlog={false}
              title="Maestría en Seguridad Informática"
              description="Actualmente, estoy cursando una Maestría en Seguridad Informática (Magíster Atrium), profundizando en áreas clave como ciberseguridad, protección de datos, criptografía y auditoría de sistemas. Mi objetivo es fortalecer mis conocimientos en seguridad digital y aplicarlos en el desarrollo de software seguro, la protección de infraestructuras críticas y la prevención de vulnerabilidades en sistemas informáticos."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scrum}
              isBlog={false}
              title="Especialidad en Scrum y Metodologías Ágiles"
              description="Cuento con experiancia en Scrum y metodologías ágiles, lo que me permite trabajar en entornos colaborativos de alto rendimiento. Aplicando principios de planificación iterativa, retroalimentación constante y mejora continua, optimizo los procesos de desarrollo de software para lograr entregas más eficientes y adaptadas a las necesidades del usuario. Mi experiencia en la gestión de proyectos ágiles me permite facilitar la comunicación entre equipos, priorizar tareas de manera efectiva y asegurar el éxito en la entrega de productos digitales."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
