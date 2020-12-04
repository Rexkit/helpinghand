import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import CategoriesList from '../../components/CategoriesList';
import RequestsList from '../../components/RequestsList';
import Pagination from '../../components/Pagination';

export class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedRequests: [],
            currentCategory: 'All',
            offset: 0,
            perPage: 4
        };
    }

    selectRequests() {
        let requestsRaw = this.props.requests
        if (this.state.currentCategory !== 'All') {
            requestsRaw = requestsRaw.filter(el => el.requestType === this.state.currentCategory);
        }
        const requestsToDisplay = requestsRaw.slice(this.state.offset, this.state.offset + this.state.perPage);
        this.setState({
            selectedRequests: requestsToDisplay
        });
    }

    componentDidMount() {
        this.selectRequests();
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.state.perPage);

        this.setState({ offset: offset }, () => {
            this.selectRequests();
        });
    };

    handleCategoryClick = (name) => {
        this.setState({ currentCategory: name }, () => {
            this.selectRequests();
        });
    };

    render() {
        return (
            <Fragment>
                <Header />
                <CategoriesList categories={this.props.categories} handleClick={this.handleCategoryClick} />
                <RequestsList users={this.props.users} requests={this.state.selectedRequests} currentCategory={this.state.currentCategory} />
                <Pagination 
                    pageCount={Math.round(this.props.requests.length / this.state.perPage)}
                    onPageChange={this.handlePageClick}
                    offset={this.state.offset}
                    limit={this.props.requests.length}
                    perPage={this.state.selectedRequests.length}
                />
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
