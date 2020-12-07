import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import searchIcon from '../../assets/icons/search-icon.png'
import styles from './searchField.module.css';

export default function SearchField(props) {
    const [query, setQuery] = useState('');

    return (
        <div>
            <InputGroup>
                <FormControl
                    className={styles.input}
                    placeholder="Search for..."
                    aria-label="search query"
                    aria-describedby="basic-addon2"
                    onChange={e => setQuery(e.target.value)}
                />
                <InputGroup.Append>
                    <Button className={styles.searchButton} onClick={() => props.handleClick(query)} variant="outline-secondary"><img className={styles.img} src={searchIcon} alt=""/></Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}
