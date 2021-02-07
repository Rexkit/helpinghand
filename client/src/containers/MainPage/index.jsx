import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import CategoriesList from '../../components/CategoriesList';

export class MainPage extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <CategoriesList categories={this.props.categories} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.settings.requestCategories
});

export default connect(mapStateToProps)(MainPage)
