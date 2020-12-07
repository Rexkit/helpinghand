import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RequestItem from '../RequestItem';

export default function RequestsList(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="mb-3">Requests</h2>
                </Col>
            </Row>
            {props.requests.map((el) => {
                let userObject = props.users[el.userId];
                return (
                    <Row key={el.userId + Math.random()}>
                        <Col>
                            <RequestItem requestName={el.requestName} requestText={el.requestText} userName={userObject.name} userLocation={userObject.location} />
                        </Col>
                    </Row>
                )
            })}
        </Container>
    )
}
