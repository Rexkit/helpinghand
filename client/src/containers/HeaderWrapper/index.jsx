import React, { Component } from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { setAuthTrue, setAuthFalse } from '../../core/state/auth/authActions';

class HeaderWrapper extends Component {
    login = () => {
        this.props.onSetAuthTrue();
    }

    logout = () => {
        this.props.onSetAuthFalse();
    }

    render() {
        return (
            <Header {...this.props} isAuthenticated={this.props.isAuthenticated} login={this.login} logout={this.logout} />
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.userId ? true : false
});

const mapDispatchToProps = dispatch => {
    return {
        onSetAuthTrue: () => {
            dispatch(setAuthTrue());
        },
        onSetAuthFalse: () => {
            dispatch(setAuthFalse());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWrapper)
