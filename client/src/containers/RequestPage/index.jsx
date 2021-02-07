import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderWrapper from '../HeaderWrapper';
import DetailedRequest from '../../components/DetailedRequest';
import { withRouter } from "react-router";
import { setWorkerId, setRequestResolved } from '../../core/state/requests/requestsActions';

class RequestPage extends Component {
    acceptRequest = id => {
        this.props.onSetWorkerId(id, this.props.authUid);
    }

    setResolved = id => {
        this.props.onSetRequestResolved(id, this.props.authUid);
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
                <DetailedRequest acceptRequest={this.acceptRequest} authId={this.props.authUid} user={userObj} request={requestObj} 
                setResolved={this.setResolved} authId={this.props.authUid} user={userObj} request={requestObj}  />
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
            dispatch(setWorkerId(id, uid))},
        onSetRequestResolved: (id) => {
            dispatch(setRequestResolved(id))
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RequestPage));
