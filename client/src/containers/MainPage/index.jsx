import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CategoriesList from '../../components/CategoriesList';
import RequestsList from '../../components/RequestsList';
import Pagination from '../../components/Pagination';
import { getAllRequests } from '../../core/state/requests/requestsActions';
import HeaderWrapper from '../HeaderWrapper';

const MainPage = ({ loading, requests, categories, users, onGetAllRequests }) => {
    const [mainPageState, setMainPageState] = useState({
        currentCategory: 'All',
        offset: 0,
        perPage: 4,
        searchQuery: ''
    });

    useEffect(() => {
        onGetAllRequests();
    }, [onGetAllRequests]);

    const selectRequests = (requestsRaw) => {
        if (mainPageState.currentCategory !== 'All') {
            requestsRaw = requestsRaw.filter(el => el.type === mainPageState.currentCategory);
        }

        requestsRaw = requestsRaw.filter(el => el.name.includes(mainPageState.searchQuery) && !el.idworker);
        return requestsRaw;
    }

    // const attachItemsToCategories = (requests) => {
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

    const handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * mainPageState.perPage);

        setMainPageState((prevState) => {
            return {
                ...prevState,
                offset
            }
        });
    };

    const handleCategoryClick = (name) => {
        setMainPageState((prevState) => {
            return {
                ...prevState,
                currentCategory: name
            }
        });
    };

    const handleSearch = (searchQuery) => {
        setMainPageState((prevState) => {
            return {
                ...prevState,
                searchQuery
            }
        });
    }

    let requestsRaw = Object.keys(requests).reduce((array, key) => ([
        ...array,
        {
            id: key,
            ...requests[key]
        }
    ]), []);

    const selectedRequests = selectRequests(requestsRaw);
    const requestsToDisplay = selectedRequests.slice(mainPageState.offset, mainPageState.offset + mainPageState.perPage);
    const requestsLength = selectedRequests.length;

    return (
        <>
            <HeaderWrapper handleSearch={handleSearch} />
            <CategoriesList currCat={mainPageState.currentCategory} categories={categories} handleClick={handleCategoryClick} />
            {!loading ? <RequestsList title="Requests" users={users} requests={requestsToDisplay} currentCategory={mainPageState.currentCategory} /> : null}
            {!loading ? <Pagination
                pageCount={Math.ceil(selectedRequests.length / mainPageState.perPage)}
                onPageChange={handlePageClick}
                offset={mainPageState.offset}
                limit={requestsLength}
                perPage={requestsToDisplay.length}
            />: null}
        </>
    );
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
