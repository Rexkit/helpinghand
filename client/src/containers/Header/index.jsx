import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchField from '../../components/SearchField'
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <Container className="header styled-box">
                <Row>
                    <Col>
                        <h1>Helping Hand</h1>
                    </Col>
                    <Col>
                        <SearchField />
                    </Col>
                    <Col>
                        <SearchField />
                    </Col>
                </Row>
            </Container>
        )
    }
}
