import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const backgroundImage = require('./Assets/cover.png');

const style = {
  header: {
    height: '30rem',
    background: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.9)), url(${backgroundImage}) center 5%`,
    backgroundSize: 'cover',
  },
};

const Header = () => (
  <Container fluid>
    <Row className="justify-content-center align-items-top text-center" style={style.header}>
      <Col xs="auto">
        <h1 className="text-white display-3">Jaswanth</h1>
      </Col>
    </Row>
  </Container>
);

export default Header;
