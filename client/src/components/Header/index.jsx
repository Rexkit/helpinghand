import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchField from '../SearchField';
import Button from '../Button';
import styles from './header.module.css';
import AccountIcon from '../../assets/icons/account-icon.png';

export default function Header(props) {
    return (
        <Container className={styles.header}>
            <Row className={`${styles.row} styled-box no-gutters`}>
                <Col>
                    <h1>Helping Hand</h1>
                </Col>
                <Col>
                    {props.handleSearch ? <SearchField handleClick={query => props.handleSearch(query)} /> : null}
                </Col>
                <Col className={styles.account_block}>
                    <div className={styles.account_icon}>
                        <img src={AccountIcon} alt="" />
                    </div>
                    {!props.isAuthenticated ? 
                        <Button onClick={() => props.login()} buttonType="primary">Login</Button> :
                        <Button onClick={() => props.logout()} buttonType="primary">Logout</Button>
                    }
                </Col>
            </Row>
        </Container>
    )
}