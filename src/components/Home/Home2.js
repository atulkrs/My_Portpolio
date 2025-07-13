import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              I’m a full-stack developer who enjoys turning ideas into real,
              functional web experiences. Whether it’s building clean interfaces
              or designing powerful backend logic — I love the creative process
              of problem-solving through code.
              <br />
              <br />I work comfortably with
              <b className='purple'> Java, JavaScript, and Python</b>, and spend
              most of my time crafting applications with
              <b className='purple'> React.js</b> on the frontend.
              <br />
              <br />
              On the backend, I use
              <b className='purple'> Node.js and Express.js</b> to build fast
              and scalable APIs. For databases, I’ve worked with both
              <b className='purple'> MySQL</b> and{" "}
              <b className='purple'>MongoDB</b>, depending on the project needs.
              <br />
              <br />I version-control everything with{" "}
              <b className='purple'>Git & GitHub</b>, and love working with
              tools like <b className='purple'>VS Code</b>,{" "}
              <b className='purple'>Postman</b>, and{" "}
              <b className='purple'>Vercel</b> for smooth development and
              deployment.
              <br />
              <br />
              I’m also curious about new technologies like{" "}
              <b className='purple'>Blockchain</b> and always exploring ways to
              level up my skills.
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/atulkrs'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/atul-kumar-singh-8b5869132/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/the_hardstone/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
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
