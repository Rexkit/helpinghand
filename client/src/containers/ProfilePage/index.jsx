import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import HeaderWrapper from '../HeaderWrapper';
import RequestsList from '../../components/RequestsList';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';

class ProfilePage extends Component {
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
                            <h5 className="mb-3">{`${userDetails.name}'s account`}</h5>
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