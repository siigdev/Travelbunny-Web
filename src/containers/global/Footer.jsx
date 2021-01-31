import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHome, faEnvelope, faStamp } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="page-footer font-small">
    <Container>
      <Row>
        <Col>
          <h6 className="uppercase">Nordico</h6>
          <p>The best adventures, every time. More than 28 million places to stay and 300 possible destinations. 
            Using real time pricing and an advanced algorithm we will find the perfect trip for you with hotels and flights included. 
            Start exploring now!</p>
        </Col>
        <Col>
          <h6 className="uppercase">Company</h6>
          <p><Link to={'/About'}>About</Link></p>
          <p><a href="#!">Career</a></p>
          <p><a href="#!">Press</a></p>
          <p><a href="#!">Privacy</a></p>
          <p><a href="#!">Terms and conditions</a></p>
        </Col>
        <Col>
          <h6 className="uppercase">Support</h6>
          <p><a href="#!">Contact</a></p>
          <p><a href="#!">FAQ</a></p>
          <p><a href="#!">Enquiry</a></p>
          <p><a href="#!">Site Map</a></p>
        </Col>
        <Col>
          <h6 className="uppercase">Contact</h6>
          <p><FontAwesomeIcon icon={faHome} size="1x" /> Campusvej 55, Odense M, DK</p>
          <p><FontAwesomeIcon icon={faEnvelope} size="1x" /> info@nordico.tech</p>
          <p><FontAwesomeIcon icon={faPhone} size="1x" /> +45 1234 5678</p>
          <p><FontAwesomeIcon icon={faStamp} size="1x" /> CVR 10961211</p>
        </Col>
      </Row>
    </Container>
    <Container className="footer-copyright">
      <Row>
        <Col>
          <p>© 2020 Copyright:
            <a href="https://nordico.tech/">
              <strong> Nordico.tech</strong>
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
