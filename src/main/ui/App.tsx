import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';

import Main from './Main';

const App = () => {
    return (
        <div>
            <HashRouter>

                    <Main/>

            </HashRouter>
        </div>
    );
}

export default App;
