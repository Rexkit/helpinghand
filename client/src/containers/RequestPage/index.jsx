import React, { Component } from 'react';
import { withRouter } from "react-router";

class RequestPage extends Component {
    render() {
        const id= this.props.match.params.id;

        return (
            <div>
                <h1>RequestID: {id}</h1>
            </div>
        )
    }
}

export default withRouter(RequestPage);
