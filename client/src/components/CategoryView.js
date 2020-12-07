import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CategoryView(props) {

    const params = props.match.params;

    return (
        <Container>
            <Row>
                <Col>
                    <h1>{params.category}</h1>
                </Col>
            </Row>
        </Container>
    )
}