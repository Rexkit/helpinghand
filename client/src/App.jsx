import React from 'react';
import MainPage from './containers/MainPage'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

function App() {
    return (
        <Router>
            <MainPage />
            <Routes />
        </Router>
    )
}

export default App;
