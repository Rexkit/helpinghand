import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import HeaderWrapper from '../HeaderWrapper';
import RequestsList from '../../components/RequestsList';

class ProfilePage extends Component {
    render() {
        const ownRequests = this.props.requests.filter(el => el.userId === this.props.authUid);
        const assignedRequests = this.props.requests.filter(el => el.idworker === this.props.authUid);

        return (
            <>
                <HeaderWrapper />
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