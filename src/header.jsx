import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
    return (
        <header className="header">
            HEADER
        </header>
    )
}

const domContainer = document.querySelector('#header');
ReactDOM.render(<Header />, domContainer);