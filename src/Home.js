import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import { Container, Row, Col } from 'reactstrap';
import Carousel from './Carousel';


class Main extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Container>
          <Row>
          <Col><Card></Card></Col>
            <Col><Card></Card></Col>
            <Col><Card></Card></Col> 
          </Row>
          <Row>
            <Col><Card></Card></Col>
            <Col><Card></Card></Col>
            <Col><Card></Card></Col>
          </Row>
          <Row>
            <Col><Card></Card></Col>
            <Col><Card></Card></Col>
            <Col><Card></Card></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
