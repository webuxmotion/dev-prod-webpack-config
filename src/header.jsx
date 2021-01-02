import React from 'react';
import ReactDOM from 'react-dom';
import LoadableDashboard from './loadableComponent';

const Header = () => {
    return (
        <header className="header">
            HEADER
            <LoadableDashboard />
        </header>
    )
}

const domContainer = document.querySelector('#header');
ReactDOM.render(<Header />, domContainer);