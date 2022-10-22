import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={8} className="text-center text-sm-end">
            <p>Copyright 2022. All Rights Reserved@Organ Bank</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}