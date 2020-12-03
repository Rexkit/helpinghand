import React from 'react';
import CategoryIcon from '../../assets/icons/category-icon.png';
import styles from './categoryitem.module.css'

export default function CategoryItem(props) {
    return (
        <div className={`${styles.categoryItem} styled-box`}>
            <div className={styles.imageBox}>
                <img className={styles.categoryImage} src={CategoryIcon} alt=""/>
            </div>
            <div>
                <p className="small">{props.name}</p>
                <p className="small-inter">1560 items in category</p>
            </div>
        </div>
    )
}
