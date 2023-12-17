import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Real Estate App",
      description: "Build with Express, React and MongoDB",
      imgUrl: projImg1,
      link: "https://real-estate-app-mern-qxrr.onrender.com/",
    },
    {
      title: "Electronic Shop",
      description: "Express JS and MongoDB Application",
      imgUrl: projImg2,
      link: "https://github.com/GGarenov/el_shop",
    },
    {
      title: "Wizards creatures",
      description: "Express JS and MongoDB Application",
      imgUrl: projImg3,
      link: "https://github.com/GGarenov/wizard-creatures",
    },
    {
      title: "Personal Portfolio",
      description: "Build with React",
      imgUrl: projImg4,
      link: "https://github.com/GGarenov/portfolio-website",
    },
    {
      title: "Tetris game",
      description: "Build with React",
      imgUrl: projImg5,
      link: "https://github.com/GGarenov/tetris_game/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>
                Explore a showcase of my projects, a testament to my skills in React, Vanilla JavaScript, Node.js,
                Express, MongoDB, Firebase, and Git.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">React Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Express Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Vanilla JS</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>Back-End Projects with ready to use simple front-end.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>
                      These projects are created on Vanilla JavaScript. Mostly games or other simple projects. To
                      demonstrate my pure javascript skills
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
