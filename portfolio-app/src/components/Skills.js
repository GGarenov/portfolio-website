import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                My skills extend from architecting backend systems to designing user interfaces.<br></br> My commitment
                is to create digital experiences that leave a lasting impression.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Express JS" />
                  <h5>Express JS</h5>
                  <p>Building robust and scalable server-side applications with Express.js</p>
                </div>
                <div className="item">
                  <img src={meter2} alt="MongoDB" />
                  <h5>MongoDB</h5>
                  <p>Storing and retrieving data efficiently using MongoDB</p>
                </div>
                <div className="item">
                  <img src={meter3} alt="React" />
                  <h5>React</h5>
                  <p>Creating interactive and dynamic user interfaces with React</p>
                </div>
                <div className="item">
                  <img src={meter1} alt="HTML & CSS" />
                  <h5>HTML & CSS</h5>
                  <p>Building well-structured and visually appealing web pages</p>
                </div>

                <div className="item">
                  <img src={meter1} alt="HTML & CSS" />
                  <h5>Git</h5>
                  <p>Understanding of branching, merging, and pull requests for collaborative development.</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
