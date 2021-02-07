import React, { Fragment } from 'react';
import './Button.css';

export default function Button(props) {
    return (
        <Fragment>
            <button onClick={props.onClick} className={props.buttonType}>{props.children}</button>
        </Fragment>
    )
}
