import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryItem from '../CategoryItem';
import styles from './categorieslist.module.css';

export default function CategoriesList(props) {
    return (
        <Container className={styles.categoriesList}>
            <Row>
                <Col>
                    <h2 className="mb-3">Categories</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {props.categories.map(el => (
                        <CategoryItem key={el} name={el} handleClick={(name) => props.handleClick(name)} />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}
