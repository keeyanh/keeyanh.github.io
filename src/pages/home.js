import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import Carousel from "react-bootstrap/Carousel";

import cert1 from "../img/certificate1.png";
import cert2 from "../img/certificate2.png";
import cert3 from "../img/certificate3.png";
import cert4 from "../img/certificate4.png";
import cert from "../img/certificate.png";

import headshot from "../img/img_headshot.png";
import { Image } from "react-bootstrap";
import rutgers from "../img/img_logo.png";
import ramapo from "../img/img_ramapo.png";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={cert} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={cert1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={cert2} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={cert3} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={cert4} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
}

const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm={4} style={{ background: "#f7f8f9" }}>
          <h1 className="header">About Me</h1>
          <hr></hr>

          <Row>
            <Col xs={6}>
              <Image src={headshot} roundedCircle className="w-100" />
            </Col>
          </Row>
          <p>
            {" "}
            <b>Hello and Welcome to my webpage!</b>
          </p>
          <p>
            Currently I am a Senior Data Analyst at Colgate-Palmolive working
            inside of Global Analytics. I received my B.S in Electrical and
            Computer Engineering from the School Of Engineering at Rutgers
            University - New Brunswick in 2020.
          </p>
          <p>
            Prior to attending Rutgers, I studied engineering through an honors
            program at Ramapo High School.
          </p>
          <hr></hr>
          <p style={{ textAlign: "center" }}>
            <b>Contact Information</b>
          </p>
          <p>
            <b>Email: </b>keeyanhaghshenas9@gmail.com
          </p>
          <p>
            <b>Phone: </b>201-961-2356
          </p>
          <p>
            <b>Portfolio: </b>www.github.com/keeyanh
          </p>
          <p>
            <b>LinkedIn: </b>https://www.linkedin.com/in/keeyan-haghshenas/
          </p>
        </Col>
        <Col sm={8} style={{ background: "#f7f8f9" }}>
          <h1 className="header">Background</h1>
          <hr></hr>
          <h2 className="text-center">Senior Data Analyst at Colgate-Palmolive</h2>
          <h2 className="text-center">Full stack software engineer</h2>
          
          <h2 className="text-center">Project Manager/Scrum Master -- Multiple Projects</h2>
          <h2 className="text-center">B.S. in Electrical and Computer Engineering Degree</h2>
          <hr></hr>
          <h4><b><u>My stack:</u></b> </h4>
          <h4><u>Frontend:</u> Html, Css, Javascript, React, Plotly Dash</h4>
          <h4><u>Frontend CSS Frameworks:</u> Bootstrap, Material UI</h4>
          <h4><u>Backend:</u> Django, Flask </h4>
          <h4><u>Database:</u> MySQL, Postgres, Neo4j, Elasticsearch</h4>
          <h4><u>Dev Ops:</u> GCP, NGINX, Docker, Kubernetes</h4>
          <h4><u>Mobile:</u> Kotlin, Java </h4>

          <hr></hr>
          <h1 className="header">Professional Certifications</h1>
          <hr></hr>
          <ControlledCarousel></ControlledCarousel>
          <hr></hr>
          <h1 className="header">Academic Education</h1>
          <hr></hr>
          <Row>
            <Col>
              <Image src={rutgers} className="w-50" />
            </Col>
          </Row>
          <h3 className="mt-2 mb-2">September 2016 - May 2020</h3>
          <Row>
            <Col>
              <p>
                <u>
                  <b>Status:</b>
                </u>{" "}
                Graduate
              </p>
              <p>
                <u>
                  <b>Major:</b>
                </u>{" "}
                Electrical and Computer Engineering
              </p>
              <p>
                <u>
                  <b>Description:</b>
                </u>{" "}
                A credit intensive rigorous degree that explores and teaches
                about all aspects of both electrical and computer engineering.
                With classes that range from the introduction of circuitry, to
                the analysis of both macro and micro electrical systems as well
                as providing not only an introduction to programming but an
                in-depth exploration into the minutia of the subject through a
                variety of languages.
              </p>
              <p>
                <u>
                  <b>Activities and Societies:</b>
                </u>{" "}
                Sigma Pi - Gamma Eta, IEEE, Volunteer at Second Reform Church,
                Calculus and Physics Tutor
              </p>
              <p>
                <u>
                  <b>Relevant Coursework: </b>
                </u>{" "}
                Programming Methodology II (Data Structures and Algorithms) /
                Programming Methodology I (OOP) / Control Systems / Linear
                Algebra / Differential Equations / Software Engineering/ Digital
                Logic Design/Computer Architecture/Digital System Design
              </p>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col>
              <Image src={ramapo} className="w-50" />
            </Col>
          </Row>
          <h2>Ramapo High School</h2>
          <h3>September 2012 - June 2016</h3>
          <Row>
            <Col>
              <p>
                <u>
                  <b>Status:</b>
                </u>{" "}
                Graduate
              </p>
              <p>
                <u>
                  <b>Description:</b>
                </u>{" "}
                Member and Graduate of the Engineering Honors Program that
                introduced, tailored and explored all aspects of engineering
                from the entrance of high school to graduation.
              </p>
              <p>
                <u>
                  <b>Activities and Societies:</b>
                </u>{" "}
                Engineering Honors Program, Robotics Team, Varsity Soccer,
                Varsity Track.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
