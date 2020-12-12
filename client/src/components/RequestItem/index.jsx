import React from 'react';
import Button from '../Button';
import styles from './requestitem.module.css';
import PersonIcon from '../../assets/icons/person-icon.png';
import { useHistory } from 'react-router-dom';

export default function RequestItem(props) {
    let history = useHistory();

    const redirect = (id, uid) => {
        history.push({
            pathname: `/request`,
            state: {
                id,
                uid
            }
        });
    }

    return (
        <div className={`${styles.requestItem} styled-box`}>
            <h5>{props.requestName}</h5>
            <p>{`${props.requestText.substring(0, 50)}...`}</p>
            <div className={styles.userBlock}>
                <div className={styles.userInfo}>
                    <img className={styles.img} src={PersonIcon} alt="" />
                    <p className={`${styles.pItem} small`}>{props.userName}</p>
                    <p className="small-inter">{`- @${props.userLocation}`}</p>
                </div>
                <Button onClick={() => redirect(props.id, props.uid)} buttonType="secondary">View Details</Button>
            </div>
        </div>
    )
}
