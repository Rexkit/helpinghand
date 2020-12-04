import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.css';

export default function Pagination(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <div className={`${styles.paginationContainer} styled-box`}>
                        <div className="d-flex">
                            <span>Page: </span>
                            <ReactPaginate
                                previousClassName={styles.previous}
                                nextClassName={styles.next}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={props.pageCount}
                                marginPagesDisplayed={1}
                                pageRangeDisplayed={3}
                                onPageChange={(data) => props.onPageChange(data)}
                                containerClassName={styles.paginationBlock}
                                subContainerClassName={'pages pagination'}
                                activeClassName={'active'}
                            />
                        </div>
                        <span>{`${props.offset} - ${props.offset + props.perPage} of ${props.limit} results`}</span>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
