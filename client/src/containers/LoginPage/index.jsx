import React from 'react';
import { connect } from 'react-redux';
import HeaderWrapper from '../HeaderWrapper';
import UsersList from '../../components/UsersList';
import { withRouter } from "react-router";
import { setAuthTrue } from '../../core/state/auth/authActions';

const LoginPage = ({ users, history, onSetAuthTrue }) => {
    const selectAuthUser = id => {
        onSetAuthTrue(id);
        history.push('/');
    }

    return (
        <>
            <HeaderWrapper />
            <UsersList users={users} onAuth={(id) => selectAuthUser(id)} />
        </>
    )
}

const mapStateToProps = state => ({
    users: Object.keys(state.users.users).reduce((array, key) => ([
        ...array,
        {
            id: key,
            ...state.users.users[key]
        }
    ]), [])
});

const mapDispatchToProps = dispatch => {
    return {
        onSetAuthTrue: (id) => {
            dispatch(setAuthTrue(id));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
