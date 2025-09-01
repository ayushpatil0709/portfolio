import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import anxiety from "../../Assets/Projects/anxiety.png";
import child from "../../Assets/Projects/child.jpeg";
import music from "../../Assets/Projects/music.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={child}
              isBlog={false}
              title="Child Safety Device using RFID"
              description="The Child Safety Device is an RFID-based monitoring system designed to ensure the safety of children 
              within a defined perimeter. Using UHF RFID tags worn by children and strategically placed RFID readers, the system 
              continuously tracks their real-time location and provides instant alerts to caregivers if a child moves outside the 
              safe boundary. The solution is scalable, non-intrusive, and ideal for environments such as schools, playgrounds, and 
              daycare centers, combining hardware and software to deliver reliable safety monitoring. A paper detailing the system’s 
              design and implementation has been filed for a conference, highlighting its potential impact in enhancing child safety 
              through IoT and RFID technology."
              ghLink=""        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anxiety}
              isBlog={false}
              title="Anxiety Companion Chatbox"
              description="This project focuses on building an empathetic chatbot capable of understanding user 
              emotions and responding with emotionally appropriate messages. It uses the cardiffnlp/twitter-roberta-base-sentiment model 
              fine-tuned on the Sentiment140 dataset to classify text into positive, neutral, or negative sentiments. The fine-tuning 
              process enhances the model’s understanding of sentiment in real-world conversations, especially social media-style text. 
              The chatbot uses these predictions to generate empathetic and context-aware responses. The final system is integrated 
              with a GUI using Tkinter for an interactive user experience"
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Mood Music Recommender"
              description="This project uses an emotion recognition model trained on the FER-2013 dataset to detect seven distinct 
              emotions. It captures a live video feed from the user's webcam and analyzes facial expressions in real time to predict the 
              current emotional state. Based on the detected emotion, the system then fetches a curated playlist from Spotify 
              using the Spotipy library and displays personalized song recommendations directly on the screen."
              ghLink=""
                 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
