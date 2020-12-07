import React from 'react';
import Button from '../Button';
import styles from './requestitem.module.css';
import PersonIcon from '../../assets/icons/person-icon.png';

export default function RequestItem(props) {
    return (
        <div className={`${styles.requestItem} styled-box`}>
            <h5>{props.requestName}</h5>
            <p>{`${props.requestText.substring(0, 50)}...`}</p>
            <div className={styles.userBlock}>
                <div className={styles.userInfo}>
                    <img className={styles.img} src={PersonIcon} alt=""/>
                    <p className={`${styles.pItem} small`}>{props.userName}</p>
                    <p className="small-inter">{`- @${props.userLocation}`}</p>
                </div>
                <Button buttonType="secondary">View Details</Button>
            </div>
        </div>
    )
}
