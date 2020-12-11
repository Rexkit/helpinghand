import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import CategoriesList from '../../components/CategoriesList';
import RequestsList from '../../components/RequestsList';
import Pagination from '../../components/Pagination';
import { getAllRequests } from '../../core/state/requests/requestsActions';
import { setAuth } from '../../core/state/auth/authActions';

export class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentCategory: 'All',
            offset: 0,
            perPage: 4,
            searchQuery: ''
        };
    }

    selectRequests() {
        let requestsRaw = Object.keys(this.props.requests).reduce((array, key) => ([
            ...array,
            {
                id: key,
                ...this.props.requests[key]
            }
        ]), []);
        if (this.state.currentCategory !== 'All') {
            requestsRaw = requestsRaw.filter(el => el.type === this.state.currentCategory);
        }
        requestsRaw = requestsRaw.filter(el => el.name.includes(this.state.searchQuery));
        const requestsToDisplay = requestsRaw.slice(this.state.offset, this.state.offset + this.state.perPage);
        
        return requestsToDisplay;
    }

    login = () => {
        this.props.onSetAuth();
    }

    componentDidMount() {
        this.props.onGetAllRequests();
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.state.perPage);

        this.setState({ offset: offset });
    };

    handleCategoryClick = (name) => {
        this.setState({ currentCategory: name });
    };

    handleSearch = (searchQuery) => {
        this.setState({ searchQuery: searchQuery })
    }

    render() {
        const { loading } = this.props;
        const selectedRequests = this.selectRequests();
        const requestsLength = Object.keys(this.props.requests).length;

        return (
            <>
                <Header handleSearch={this.handleSearch} auth={this.login} />
                <CategoriesList categories={this.props.categories} handleClick={this.handleCategoryClick} />
                {!loading ? <RequestsList users={this.props.users} requests={selectedRequests} currentCategory={this.state.currentCategory} /> : <h1>loading</h1>}
                {!loading ? <Pagination
                    pageCount={Math.round(requestsLength / this.state.perPage)}
                    onPageChange={this.handlePageClick}
                    offset={this.state.offset}
                    limit={requestsLength}
                    perPage={selectedRequests.length}
                />: null}
            </>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.settings.requestCategories,
    requests: state.requests.requests,
    users: state.users.users,
    loading: state.requests.loading
});

const mapDispatchToProps = dispatch => {
    return {
        onGetAllRequests: () => {
            dispatch(getAllRequests());
        },
        onSetAuth: () => {
            dispatch(setAuth());
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
