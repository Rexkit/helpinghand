import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './detailedinfo.module.css';

export default function DetailedInfo(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="mb-3">Contact Information</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={`${styles.contactBlock} styled-box`}>
                        <div className={styles.contactRow}>
                            <p className="pr-5">Email address</p>
                            <p className="small-inter">{props.user.email}</p>
                        </div>
                        <div className={styles.contactRow}>
                            <p className="pr-5">Mobile number</p>
                            <p className="small-inter">{props.user.phone}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
