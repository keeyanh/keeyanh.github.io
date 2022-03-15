import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import headshot from "../img/img_headshot.png";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";


import athena from "../img/athena.png";
import vb from "../img/inverted_logo_eyes.png"
import duck from "../img/img_duck.png";
import c_lang from "../img/img_c.png";
import ht from "../img/img_ht.jpg"
import three from "../img/img_three.png"

import cross from "../img/img_cross.png"

import img_state from "../img/img_state.png"

import react from "../img/react_logo.png"










function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Card >
          <Row>
            <Col>
              <Card.Img variant='top' style={{ height: "300px", width: "300px", }} src={vb} />
            </Col>

          </Row>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title>VisionBoard</Card.Title>
                <Card.Text>
                  <p><b><u>Problem:</u></b></p>
                  <p>Cross-functional teams lack a ‘shared set of facts’ to use when trying to discover and assess innovation opportunities</p>
                  <p>External vendors lead to fragmented analytics, which can’t leverage the full breadth of relevant data</p>
                  <p><b><u>Solution:</u></b></p>
                  <p>Data Democratization</p>
                  <p>VisionBoard -- 14 different tools in one central location focused entity analysis and innovation analytics</p>
                  <p>Current Usage: 750 users</p>
                  <p><b><u>More Details Available Upon Request</u></b></p>
                </Card.Text>
                {/* {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Col>

          </Row>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card >
          <Row>
            <Col>
              <Card.Img variant='top' style={{ height: "300px", width: "300px", }} src={athena} />
            </Col>

          </Row>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title>Athena</Card.Title>
                <Card.Text>
                  <p><b><u>Problem:</u></b></p>
                  <p>Marketer’s often think their products will sell much better than they actually do, when inputting potential sales of product they tend to stretch the numbers, we need a way to validate their sales claims.</p>
                  <p><b><u>Solution:</u></b></p>
                  <p>Data Democratization</p>
                  <p>Tracking all new projects globally with a KPI focus on sales, market share and incrementality, training a model to predict potential net sales of product</p>
                  <p>Current Usage: 50 users</p>
                  <p><b><u>More Details Available Upon Request</u></b></p>
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Col>

          </Row>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card >
          <Row>
            <Col>
              <Card.Img variant='top' src={duck} />
            </Col>

          </Row>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title>Stock Market Investment League Simulator</Card.Title>
                <Card.Text>
                  <h4> Goal: To Develop a fantasy game that allows aspiring investors to learn how to trade financial stocks.The game supports trading activities and simulates a broker who pretends to execute trading orders. </h4>
                  <h4> Actions: </h4>
                  <p> As a group we were able to developed an interface that simulates role of broker that executes educated trades as well as simulates a competition aspect in order to make the simulator a game </p>
                  <p> We essentially created a fantasy league but instead of the statistics in a sporting game, we created a league with all types of functionality that uses actual stock data, including buy/sell stocks, trading, different game types, multiple leagues,   cross platform functionality, security features and real data as well as gearing the basis of the simulator to be educational in its function, teaching young investors how to operate in the market</p>
                  <p> Our software was designed to utilize SQL databases, big data analysis, .NET programming, Alexa Integration, and Microsoft's Azure to result in a website, and functional iOS and Android applications </p>
                  <p> However it doesn't stop there we were able to implemented desktop ticker hardware, using data from databases that shows how your stocks are doing in real time</p>
                  <p>I also headed and organized all documentation and presentation of progression through development cycle,
                    utilizing symbolic representation of software life-cycle models</p>
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Col>

          </Row>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <Card >
          <Row>
            <Col>
              <Card.Img variant='top' src={c_lang} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title>Bank and Stock System Project</Card.Title>
                <Card.Text>
                  <h4> Goal: To Created a system that models a stock market account and can communicate with previous bank account project using C++ features</h4>
                  <h4> Actions: </h4>
                  <p> This was my second project focused around object oriented design also in C++ and I was able to draft 50+ different functions and 1000+ lines of code across numerous files to use in tandem to implement a functional stock market account simulator that communicated with a bank account, focusing on C++ OOP features, including abstraction, encapsulation, inheritance, and polymorphism
                  </p>
                  <p> I was also able to create and implemented different functions inside the system to buy/sell stock, and display
                    current portfolio, transaction history, and current price for stock model. </p>
                  <p> Used an object oriented design startegy to create the structure for the overall program, then I drafted these functions with real stocks and had it operate in real time to ensure that the system was functional and efficient.
                  </p>
                  <p> Other than the obvious ability to practice OOP concepts I also took this project as an oppoturnity to displayed expertise in pointers, vectors, passing functions and recursion. </p>
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Col>

          </Row>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <Card >
          <Row>
            <Col>
              <Card.Img variant='top' src={ht} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title>Portfolio Website Version 1.0 </Card.Title>
                <Card.Text>
                  <h3> Goal: Create a Portfolio Website and Learn about HTML, CSS, and Java Script </h3>

                  <h4> Actions: </h4>


                  <p> I needed a place to store all my projects and for people to get to know me better and realize that I am much more than a resume </p>

                  <p> I am a programmer at heart and a person above all, I love learning and educating myself on all languages and types of problem solving and my hopes in hosting this website was to spark more connection and conversation about different projects and methods of problem solving</p>

                  <p> I decided to teach myself javascript, html, and css, in order to program this entire website</p>
                  <p> Please feel free to look at the programming of this website and see how I did it, I am always open to suggestions! </p>

                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Col>

          </Row>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card >
          <Row>
            <Col>
              <Card.Img variant='top' src={react} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title>Portfolio Website Version 2.0 </Card.Title>
                <Card.Text>
                  <h3> Goal: Create a Portfolio Website and Learn about React </h3>

                  <h4> Actions: </h4>


                  <p> Rewrote the entire website in React </p>

                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Col>

          </Row>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <Card >
          <Row>
            <Col>
              <Card.Img variant='top' src={cross} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title>Three Way Crossover Network </Card.Title>
                <Card.Text>
                  <h3> Goal: Design Three Way Crossover Network </h3>

                  <h4> Actions: </h4>

                  <p>Designed three way crossover network for stereo speaker system, selecting specific capacitor and inductor values to produce best response for desired frequency range
                    Derived transfer function for high, low, and bandpass filters as a base for all remaining design
                    Utilizing both Matlab and Python, drafted Bode Plots for all three filters required in crossover network
                    Drafted and simulated design schematic using LTSPICE to produce, a magnitude and phase bode plot for the output of each filter, and the differential magnitude of voltage plot between all filters involved</p>

                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Col>

          </Row>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card >
          <Row>
            <Col>
              <Card.Img variant='top' src={three} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title>CMOS Equation Solver </Card.Title>
                <Card.Text>
                  <h3> Goal: Design CMOS Equation Solver that will work for any boolean equation </h3>

                  <h4> Actions: </h4>

                  <p>Designed and simulated CMOS circuit to produce all possible values of any given boolean expression
                    Designed reference inverter based on unique values of capacitive load, propagation delay and transistor sizing
                    Redesigned circuitry to produce MOSFET centered minimum area circuit design
                    Simulated and analyzed transient response of output voltage for all designed circuits utilizing LTSPICE</p>
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Col>

          </Row>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card >
          <Row>
            <Col>
              <Card.Img variant='top' src={img_state} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title>Combinational Lock  </Card.Title>
                <Card.Text>
                  <h3> Goal: Design Combinational Lock that would unlock to specific code given</h3>

                  <h4> Actions: </h4>


                  <p>Designed, simulated and implemented a combination lock that would unlock to a specific student ID entered in binary.
                    Designed and implemented incorrect, correct, and entirely correct transition, and coordinated such with indicator LED </p>

                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Col>

          </Row>
        </Card>
      </Carousel.Item>



    </Carousel>
  );
}








const Projects = () => {
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
        <Col sm={8} style={{ background: "#f7f8f9", "overflow-y": "scroll" }}>
          <h1 className="header">Projects</h1>
          <hr></hr>
          <ControlledCarousel />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
