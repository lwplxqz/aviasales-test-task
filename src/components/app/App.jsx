import React from 'react';


import Header from '../header/header';
import Queries from '../queries/queries';
import Main from '../main/main';
import './App.scss'

function App() {
    return (
        <div className="app">
            <Header />
            <div className='app-wrapper'>
                <Queries />
                <Main />

            </div>
        </div>
    );
}

export default App;
