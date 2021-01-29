import React from 'react';
import CategoryIcon from '../../assets/icons/category-icon.png';
import styles from './categoryitem.module.css'

export default function CategoryItem(props) {
    const categoryClick = (name) => {
        props.handleClick(name);
    };

    return (
        <div className={`${styles.categoryItem} styled-box`} onClick={() => categoryClick(props.name)}>
            <div className={styles.imageBox}>
                <img className={styles.categoryImage} src={CategoryIcon} alt=""/>
            </div>
            <div>
                <p className="small">{props.name}</p>
            </div>
        </div>
    )
}
