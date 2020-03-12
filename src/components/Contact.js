import React, { Component } from 'react';
import {Container, Row, Col, Button, Alert} from 'react-bootstrap';
export default class Contact extends Component{
    render (){
        return(
            <div>
            <Container>
                <Row>
                    <Col>
                        <br />
                        <h1 className= "contactme">
                            Contact Me
                        </h1>
                        <h2 className= "contactme2">Name: Shaker Kattoula
                        <br />
                        Email Address: smkattoula@gmail.com</h2>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
