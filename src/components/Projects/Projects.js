import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title='Assigment Submission Portal'
              description='A web-based portal where admins can assign tasks to users, and users can view and submit their assigned assignments.'
              ghLink='https://github.com/atulkrs/Backend-Assignment-Submisson-Portal'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title='Facebook Helpdesk'
              description='A helpdesk system integrated with Facebook Messenger that enables real-time customer support by managing and responding to user queries efficiently.'
              ghLink='https://github.com/atulkrs/Facebook_helpdesk'
              Demo='https://facebook-helpdesk.vercel.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              isBlog={false}
              title='Identification of Parkinson’s Disease'
              description='A machine learning-based application that identifies Parkinson’s Disease using speech features and spiral drawing analysis. The system processes voice samples and spiral images to detect symptoms with improved accuracy.'
              ghLink='https://github.com/atulkrs/Identification_of_Parkinsons_Disease_Using_Speech_and_Spiral_Image'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title='Automatic MCQ Quiz Generation'
              description='A Python-based application that automatically generates multiple-choice questions (MCQs) and crossword puzzles from given textual content using NLP techniques. Useful for educators to create assessments quickly and efficiently.'
              ghLink='https://github.com/atulkrs/Automatic-MCQ_Quiz-and-Crossword-Generator'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title='Employee_Management_System'
              description='A web-based application to manage employee data, including features such as adding, updating, viewing, and deleting employee records. Built with a focus on efficient CRUD operations and user-friendly UI.'
              ghLink='https://github.com/atulkrs/Employee_Management_System'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
