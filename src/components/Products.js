import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Title from './Title.js';

import data from '../DATA/data';

const Products = () => {
    return (
        <>
            <Title title="Products List" height="20"/>

            <Container >
                <Row style={{ paddingTop : '1%'}}>
                    {data.map((v,i) => {
                        return (
                            <Col sm="3" key={v.id} style={{ paddingTop : '1%' }}>
                                <Card >
                                    <Card.Img variant="top" src={v.image} height="100" width="80"/>
                                    <Card.Body>
                                        <Card.Text>

                                        </Card.Text>
                                        <Button variant="primary" href={`/product/details/${v.id}`}>More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </>
    )
}
export default Products;