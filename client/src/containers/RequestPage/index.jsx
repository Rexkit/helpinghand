import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderWrapper from '../HeaderWrapper';
import DetailedRequest from '../../components/DetailedRequest';
import { withRouter } from "react-router";
import { setWorkerId } from '../../core/state/requests/requestsActions';

class RequestPage extends Component {
    acceptRequest = id => {
        this.props.onSetWorkerId(id, this.props.authUid);
    }

    render() {
        const id = Number(this.props.location.state.id);
        const uid = Number(this.props.location.state.uid);
        
        const userObj = {
            id: uid,
            ...this.props.users[uid]
        };

        const requestObj = {
            id: id,
            ...this.props.requests[id]
        };

        return (
            <>
                <HeaderWrapper />
                <DetailedRequest acceptRequest={this.acceptRequest} user={userObj} request={requestObj} />
            </>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.users,
    requests: state.requests.requests,
    authUid: state.auth.userId
});

const mapDispatchToProps = dispatch => {
    return {
        onSetWorkerId: (id, uid) => {
            dispatch(setWorkerId(id, uid));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RequestPage));
