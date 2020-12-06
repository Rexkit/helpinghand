import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import CategoriesList from '../../components/CategoriesList';

export class MainPage extends Component {
    render() {
        return (
            <>
                <Header />
                <CategoriesList categories={this.props.categories} />
            </>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.settings.requestCategories
});

export default connect(mapStateToProps)(MainPage)
