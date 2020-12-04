import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchField from '../SearchField';
import Button from '../Button';
import styles from './header.module.css';
import AccountIcon from '../../assets/icons/account-icon.png';

export default function Header() {
    return (
        <Container className={styles.header}>
            <Row className={`${styles.row} styled-box no-gutters`}>
                <Col>
                    <h1>Helping Hand</h1>
                </Col>
                <Col>
                    <SearchField />
                </Col>
                <Col className={styles.account_block}>
                    <div className={styles.account_icon}>
                        <img src={AccountIcon} alt="" />
                    </div>
                    <Button buttonType="primary">Login</Button>
                </Col>
            </Row>
        </Container>
    )
}