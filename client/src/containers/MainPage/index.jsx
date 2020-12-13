import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoriesList from '../../components/CategoriesList';
import RequestsList from '../../components/RequestsList';
import Pagination from '../../components/Pagination';
import { getAllRequests } from '../../core/state/requests/requestsActions';
import HeaderWrapper from '../HeaderWrapper';

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

    selectRequests(requestsRaw) {
        if (this.state.currentCategory !== 'All') {
            requestsRaw = requestsRaw.filter(el => el.type === this.state.currentCategory);
        }
        requestsRaw = requestsRaw.filter(el => el.name.includes(this.state.searchQuery) && !el.idworker);
        return requestsRaw;
    }

    // attachItemsToCategories(requests) {
    //     const categoriesObj = {};

    //     for(let i = 0; i < requests.length; i++) {
    //         if (requests[i].type in categoriesObj) {
    //             categoriesObj[requests[i].type].count += 1;
    //         } else {
    //             categoriesObj[requests[i].type] = {
    //                 count: 1
    //             }
    //         }
    //     }

    //     return categoriesObj;
    // }

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

        let requestsRaw = Object.keys(this.props.requests).reduce((array, key) => ([
            ...array,
            {
                id: key,
                ...this.props.requests[key]
            }
        ]), []);

        const selectedRequests = this.selectRequests(requestsRaw);
        const requestsToDisplay = selectedRequests.slice(this.state.offset, this.state.offset + this.state.perPage);
        const requestsLength = selectedRequests.length;

        return (
            <>
                <HeaderWrapper handleSearch={this.handleSearch} />
                <CategoriesList categories={this.props.categories} handleClick={this.handleCategoryClick} />
                {!loading ? <RequestsList title="Requests" users={this.props.users} requests={requestsToDisplay} currentCategory={this.state.currentCategory} /> : <h1>loading</h1>}
                {!loading ? <Pagination
                    pageCount={Math.round(requestsLength / this.state.perPage)}
                    onPageChange={this.handlePageClick}
                    offset={this.state.offset}
                    limit={requestsLength}
                    perPage={requestsToDisplay.length}
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
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
