import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  return (
    <Container fluid className="footer">
      <Row>
        <ul className="footer-icons">
          <li className="social-icons">
            <a
              href="https://github.com/ayushpatil0709"
              style={{ color: "white" }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </li>
          
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/ayush-0507-patil/"
              style={{ color: "white" }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </Row>
    </Container>
  );
}

export default Footer;
