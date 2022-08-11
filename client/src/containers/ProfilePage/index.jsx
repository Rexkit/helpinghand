import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import HeaderWrapper from '../HeaderWrapper';
import RequestsList from '../../components/RequestsList';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from '../../components/Button';
import styles from './profile.module.css';

const ProfilePage = ({ users, requests, authUid, history }) => {
    const createRequest = () => {
        history.push("/create");
    };

    const ownRequests = requests.filter(el => el.userId === authUid);
    const assignedRequests = requests.filter(el => el.idworker === authUid);

    let userDetails = users[authUid];

    return (
        <>
            <HeaderWrapper />
            <Container>
                <Row>
                    <Col>
                        <div className={styles.flexCenter}>
                            <h5 className={`${styles.mrAuto} mb-3`}>{`Profile: ${userDetails.name}`}</h5>
                            <Button className={styles.mlAuto} onClick={createRequest} buttonType="primary">Create Request</Button>
                        </div>
                        <hr />
                    </Col>
                </Row>
            </Container>
            <RequestsList title="Own Requests" users={users} requests={ownRequests} />
            <RequestsList title="Assigned Requests" users={users} requests={assignedRequests} />
        </>
    )
}

const mapStateToProps = state => ({
    users: state.users.users,
    requests: Object.keys(state.requests.requests).reduce((array, key) => ([
        ...array,
        {
            id: key,
            ...state.requests.requests[key]
        }
    ]), []),
    authUid: state.auth.userId
});

export default withRouter(connect(mapStateToProps)(ProfilePage));