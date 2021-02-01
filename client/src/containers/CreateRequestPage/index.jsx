import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderWrapper from '../HeaderWrapper';
import { withRouter } from "react-router";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

class CreateRequestPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          title: "",
          category: "Grocery",
          description: "",
        };
    }

    createRequest = () => axios
    .post("http://localhost:8080/api/create/createRequest", {
        iduser: this.props.authUid,
        request_name: this.state.title,
        request_text: this.state.description,
        request_cat: this.state.category,
    }).then((response) => {
      console.log(response);
    });

    render() {
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
                                        onChange={e => this.setState({ title: e.target.value })}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Form.Category">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control as="select" onChange={e => this.setState({ category: e.target.value })}>
                                        <option>Grocery</option>
                                        <option>Medicine</option>
                                        <option>Other</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="Form.Description">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} onChange={e => this.setState({ description: e.target.value })}/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" onClick={this.createRequest}>
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
}

const mapStateToProps = state => ({
    authUid: state.auth.userId
});

export default withRouter(connect(mapStateToProps)(CreateRequestPage));