import React from 'react';
import { connect } from 'react-redux';
import HeaderWrapper from '../HeaderWrapper';
import DetailedRequest from '../../components/DetailedRequest';
import { withRouter } from "react-router";
import { setWorkerId, setRequestResolved } from '../../core/state/requests/requestsActions';
import { deleteRequest } from '../../core/state/requests/requestsActions';

const RequestPage = ({ users, requests, authUid, location, onSetWorkerId, onSetRequestResolved, onDeleteRequest }) => {
    const acceptRequest = id => {
        onSetWorkerId(id, authUid);
    }

    const setResolved = id => {
        onSetRequestResolved(id, authUid);
    }

    const deleteRequest = id => {
        onDeleteRequest(id, authUid);
    }

    const id = Number(location.state.id);
    const uid = Number(location.state.uid);
    
    const userObj = {
        id: uid,
        ...users[uid]
    };

    const requestObj = {
        id: id,
        ...requests[id]
    };

    return (
        <>
            <HeaderWrapper />
            <DetailedRequest
                acceptRequest={acceptRequest}
                authId={authUid}
                user={userObj}
                request={requestObj} 
                setResolved={setResolved} 
                deleteRequest={deleteRequest}
            />
        </>
    )
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
            dispatch(setRequestResolved(id))},
        onDeleteRequest: (id) => {
            dispatch(deleteRequest(id))
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RequestPage));
