import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import CategoriesList from '../../components/CategoriesList';
import RequestsList from '../../components/RequestsList';

export class MainPage extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <CategoriesList categories={this.props.categories} />
                <RequestsList users={this.props.users} requests={this.props.requests} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.settings.requestCategories,
    requests: state.requests.requests,
    users: state.users.users
});

export default connect(mapStateToProps)(MainPage)
