import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/full_logo.png";
import linkedinIcon from "../assets/img/social_icons/linkedin.svg";
import githubIcon from "../assets/img/social_icons/github.svg";
import whatsappIcon from "../assets/img/social_icons/whatsapp.svg";

export const Footer = () => {
  const fecha = new Date();
  const year = fecha.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/se-leonardo-martinez/"><img src={linkedinIcon} alt="Linkedin Icon" /></a>
              <a href="https://github.com/leo-Oh/"><img src={githubIcon} alt="Linkedin Icon" /></a>
              <a href="https://api.whatsapp.com/send?phone=2713975154"><img src={whatsappIcon} alt="Whatsapp Icon" /></a>
            </div>
            <p>Copyright {year}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
