import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import projImg6 from "../assets/img/project6.png";
import projImg7 from "../assets/img/project7.png";
import projImg8 from "../assets/img/project8.png";
import projImg9 from "../assets/img/project9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Real Estate App",
      description: "Build with Express, React and MongoDB",
      imgUrl: projImg1,
      githubLink: "https://github.com/GGarenov/real-estate-app",
      previewLink: "https://real-estate-app-mern-qxrr.onrender.com/",
      category: "react",
    },
    {
      title: "Electronic Shop",
      description:
        "Project for Soft Uni where I used Express JS and MongoDB. The front-end is build with Handlebars",
      imgUrl: projImg2,
      githubLink: "https://github.com/GGarenov/el_shop",
      category: "express",
    },
    {
      title: "Wizards creatures",
      description:
        "Another Express JS and MongoDB project for Soft Uni. The front-end is built with Handlebars",
      imgUrl: projImg3,
      githubLink: "https://github.com/GGarenov/wizard-creatures",
      category: "express",
    },
    {
      title: "Course Book",
      description:
        "Express JS and MongoDB project for Soft Uni. The front-end is built with Handlebars",
      imgUrl: projImg7,
      githubLink: "https://github.com/GGarenov/Course_Book_express_app",
      category: "express",
    },
    {
      title: "Personal Portfolio",
      description: "React project for my personal portfolio website",
      imgUrl: projImg4,
      githubLink: "https://github.com/GGarenov/portfolio-website",
      previewLink: "https://ggarenov.github.io/portfolio-website/",
      category: "react",
    },
    {
      title: "Tetris game",
      description:
        "Simple tetris game build with React but also demonstrated my pure javascript skills",
      imgUrl: projImg5,
      githubLink: "https://github.com/GGarenov/tetris_game/",
      previewLink: "https://ggarenov.github.io/tetris_game/",
      category: "vanilla",
    },
    {
      title: "Ecommerce website",
      description:
        "This ecommerce website is build with Next JS and React. It is connected to Firebase and Stripe for payments",
      imgUrl: projImg6,
      githubLink: "https://github.com/GGarenov/ecommerce-nextjs/",
      category: "react",
    },
    {
      title: "Angular Blog + Admin Panel",
      description:
        "This is a simple blog page with admin panel for the CRUD operations written on Angular and Firebase",
      imgUrl: projImg8,
      githubLink: "https://github.com/GGarenov/angular-blog-app",
      previewLink: "https://angular-blog-ab62c.web.app/",
      category: "react",
    },
    {
      title: "Ecommerce App with admin panel (MERN)",
      description:
        "This is an ecommerce app built on react, express, mongodb. Admin panel for the CRUD operations",
      imgUrl: projImg9,
      githubLink: "https://github.com/GGarenov/ecommerce-app",
      previewLink: "https://sunglasses-ecommerce-app.vercel.app/",
      category: "react",
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
                Explore a showcase of my projects, a testament to my skills in
                React, Angular, Vanilla JavaScript, Node.js, Express, MongoDB,
                Firebase, and Git.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">React & Angular</Nav.Link>
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
                      {projects
                        .filter((project) => project.category === "react")
                        .map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>Back-End Projects with ready to use simple front-end.</p>
                    <Row>
                      {projects
                        .filter((project) => project.category === "express")
                        .map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>
                      These projects are created on Vanilla JavaScript. Mostly
                      games or other simple projects. To demonstrate my pure
                      javascript skills
                    </p>
                    <Row>
                      {projects
                        .filter((project) => project.category === "vanilla")
                        .map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  );
};
