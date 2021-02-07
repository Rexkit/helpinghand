import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './detailedrequest.module.css';
import PersonIcon from '../../assets/icons/person-icon.png';
import Button from '../Button';
import DetailedInfo from '../DetailedInfo';

export default function DetailedRequest(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className={`${styles.request} styled-box`}>
                            <h2>{props.request.name}</h2>
                            <div className={styles.userInfo}>
                                <img className={styles.img} src={PersonIcon} alt="" />
                                <p className={`${styles.pItem} small`}>{props.user.name}</p>
                                <p className="small-inter">{`- @${props.user.location}`}</p>
                            </div>
                            <p>{props.request.text}</p>
                            <div className={styles.userBlock}>
                                {!props.request.idworker ? 
                                    <Button onClick={() => props.acceptRequest(props.request.id)} buttonType="primary">Accept</Button>:
                                    <Button buttonType="primary">Accepted!</Button>}
                                {props.request.userId === props.authId ? <Button buttonType="secondary">Delete</Button> : null}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {props.request.idworker ? <DetailedInfo user={props.user} /> : null}
        </>
    )
}