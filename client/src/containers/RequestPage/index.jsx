import React, { Component } from 'react';
import HeaderWrapper from '../HeaderWrapper';
import { withRouter } from "react-router";

class RequestPage extends Component {
    render() {
        const id= this.props.match.params.id;

        return (
            <>
                <HeaderWrapper />
            </>
        )
    }
}

export default withRouter(RequestPage);
