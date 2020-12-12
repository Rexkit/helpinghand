import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import HeaderWrapper from '../HeaderWrapper';
import RequestsList from '../../components/RequestsList';

class ProfilePage extends Component {
    render() {
        const filteredRequests = this.props.requests.filter(el => el.userId === this.props.authUid);

        return (
            <>
                <HeaderWrapper />
                <RequestsList users={this.props.users} requests={filteredRequests} />
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