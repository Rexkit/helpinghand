import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchField from '../SearchField';
import Button from '../Button';
import styles from './header.module.css';
import AccountIcon from '../../assets/icons/account-icon.png';
import { useHistory } from 'react-router-dom';

export default function Header(props) {
    let history = useHistory();

    const redirect = () => {
        history.push('/');
    }

    const redirectToProfile = () => {
        history.push('/profile');
    }

    return (
        <Container className={styles.header}>
            <Row className={`${styles.row} styled-box no-gutters`}>
                <Col>
                    <h1 onClick={redirect}>Helping Hand</h1>
                </Col>
                <Col>
                    {props.handleSearch ? <SearchField handleClick={query => props.handleSearch(query)} /> : null}
                </Col>
                <Col className={styles.account_block}>
                    {props.isAuthenticated ? <div className={styles.account_icon}>
                        <img onClick={redirectToProfile} src={AccountIcon} alt="" />
                    </div> : null}
                    {!props.isAuthenticated ? 
                        <Button onClick={() => props.login()} buttonType="primary">Login</Button> :
                        <Button onClick={() => props.logout()} buttonType="primary">Logout</Button>
                    }
                </Col>
            </Row>
        </Container>
    )
}