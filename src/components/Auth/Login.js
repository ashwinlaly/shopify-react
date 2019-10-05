import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const Login = () => {
    return (
        <>
            <Container style={{paddingTop : '2%' }}>
                <Row>
                    <Col />
                    <Col lg="12">
                        <Card>
                            <Card.Header>Login</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Enter the Email</Form.Label>
                                        <Form.Control placeholder="Enter the Email" type="text"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Enter the Password</Form.Label>
                                        <Form.Control placeholder="Enter the Password" type="password"/>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Col sm="6"></Col>
                                        <Col>
                                            <ButtonToolbar>
                                                <Button variant="danger" style={{ margin : '2px'}} >Clear</Button>
                                                <Button variant="primary" style={{ margin : '2px'}} >Login</Button>
                                            </ButtonToolbar>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col />
                </Row>
            </Container>
        </>
    )
}

export default Login;