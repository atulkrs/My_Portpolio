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

          {/* <Col md={4} className='project-card'>
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title='Face Recognition and Emotion Detection'
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink='https://github.com/soumyajit4419/Face_And_Emotion_Detection'
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
