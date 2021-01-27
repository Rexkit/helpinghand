import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderWrapper from '../HeaderWrapper';
import UsersList from '../../components/UsersList';
import { withRouter } from "react-router";
import { setAuthTrue } from '../../core/state/auth/authActions';

class LoginPage extends Component {
    selectAuthUser = id => {
        this.props.onSetAuthTrue(id);
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <HeaderWrapper />
                <UsersList users={this.props.users} onAuth={(id) => this.selectAuthUser(id)} />
            </>
        )
    }
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
