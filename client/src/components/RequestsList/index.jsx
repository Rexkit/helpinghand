import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RequestItem from '../RequestItem';
import { useSelector } from 'react-redux'

export default function RequestsList(props) {
    const isAuthenticated = useSelector(state => state.auth.userId ? true : false)

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
                            <RequestItem requestName={el.name} auth={isAuthenticated} id={el.id} uid={el.userId} requestText={el.text} userName={userObject.name} userLocation={userObject.location} />
                        </Col>
                    </Row>
                )
            })}
        </Container>
    )
}
