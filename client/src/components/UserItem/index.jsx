import React from 'react';
import Button from '../Button';
import styles from './useritem.module.css';

export default function UserItem(props) {

    return (
        <div className={`${styles.userItem} styled-box`}>
            <h5>{props.name}</h5>
            <div>
                <Button onClick={() => props.onAuth(props.id)} buttonType="secondary">Use Profile</Button>
            </div>
        </div>
    )
}
