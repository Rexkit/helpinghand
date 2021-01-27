import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserItem from '../UserItem';

export default function UsersList(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="mb-3">Users List</h2>
                </Col>
            </Row>
            {props.users.map((el) => {
                return (
                    <Row key={el.id + Math.random()}>
                        <Col>
                            <UserItem onAuth={(id) => props.onAuth(id)} id={el.id} name={el.name} />
                        </Col>
                    </Row>
                )
            })}
        </Container>
    )
}
