import React, { Component } from 'react';
import {Container, Row, Col, Button, Alert} from 'react-bootstrap';
export default class About extends Component{
    render (){
        return(
            <div>
            <Container className="textbgabout">
                <Row>
                    <Col>
                        <br />
                        <h1 className= "aboutme">
                            About Me
                        </h1>
                        <h2 className= "aboutme2">Yo! Thank you for visiting my page! A little bit about me: I love hiking, rock climbing, creating music,   going on long runs, spending quality time with friends and family, and going skydiving on the weekends!
                        <br />
                        <br />
                        I'm new to code but determined to learn everything I can in order to become a great coder, and help others to succeed as well! Please feel free to check out the projects that I've created so far.
                        <br />
                        <br />
                        Also, be sure to check back from time to time to see new projects that I'm working on. I'm always challenging myself to take on more complex coding projects in order to improve my skills. Happy Hacking! B-) </h2>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
