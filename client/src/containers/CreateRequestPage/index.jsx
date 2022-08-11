import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import HeaderWrapper from '../HeaderWrapper';
import { withRouter } from "react-router";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const CreateRequestPage = ({ authUid, history }) => {
    const [requestState, setRequestState] = useState({
        title: "",
        category: "Grocery",
        description: "",
    });

    const createRequest = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8080/api/create/createRequest", {
            iduser: authUid,
            request_name: requestState.title,
            request_text: requestState.description,
            request_cat: requestState.category,
        });

        console.log(response);
        history.push('/');
    };

    return (
        <>
            <HeaderWrapper />
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1>Create a new request</h1>
                            <hr />
                            <Form>
                                <Form.Group controlId="Form.Title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="E.g. Need some paracetamol..."
                                    onChange={e => setRequestState((prevState) => ({ ...prevState, title: e.target.value }))}
                                    />
                                </Form.Group>
                                <Form.Group controlId="Form.Category">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control as="select" onChange={e => setRequestState((prevState) => ({ ...prevState, category: e.target.value }))}>
                                    <option>Grocery</option>
                                    <option>Medicine</option>
                                    <option>Other</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="Form.Description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} onChange={e => setRequestState((prevState) => ({ ...prevState, description: e.target.value }))}/>
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={(event) => createRequest(event)}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const mapStateToProps = state => ({
    authUid: state.auth.userId
});

export default withRouter(connect(mapStateToProps)(CreateRequestPage));