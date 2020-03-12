import React, { Component } from 'react';
import {Container, Row, Col, Button, Alert} from 'react-bootstrap';
import lightbulb from './lightbulb_on.png'
export default class Projects extends Component{
    render (){
        return(
            <div>
            <Container>
            <Row>
                <Col>
                    <p>Projects</p>
                    <img src= {lightbulb}/>
                </Col>
                <Col>
                    <p>Project Description
                    </p>
                </Col>
            </Row>
            </Container>
            </div>

        )
    }
}
