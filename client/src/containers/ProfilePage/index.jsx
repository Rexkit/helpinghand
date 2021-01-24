import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import HeaderWrapper from '../HeaderWrapper';
import RequestsList from '../../components/RequestsList';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from '../../components/Button';
import styles from './profile.module.css';

class ProfilePage extends Component {

    createRequest = e => {
        this.props.history.push("/create");
    };

    render() {
        let uid = this.props.authUid;

        const ownRequests = this.props.requests.filter(el => el.userId === uid);
        const assignedRequests = this.props.requests.filter(el => el.idworker === uid);

        let userDetails = this.props.users[uid];

        return (
            <>
                <HeaderWrapper />
                <Container>
                    <Row>
                        <Col>
                            <div className={styles.flexCenter}>
                                <h5 className={`${styles.mrAuto} mb-3`}>{`${userDetails.name}'s account`}</h5>
                                <Button className={styles.mlAuto} onClick={this.createRequest} buttonType="primary">Create Request</Button>
                            </div>
                            <hr />
                        </Col>
                    </Row>
                </Container>
                <RequestsList title="Own Requests" users={this.props.users} requests={ownRequests} />
                <RequestsList title="Assigned Requests" users={this.props.users} requests={assignedRequests} />
            </>
        )
    }
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