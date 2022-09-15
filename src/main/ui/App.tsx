import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';

import Main from './Main';
import {Provider} from 'react-redux';
import {store} from '../bll/store';

const App = () => {
    return (
        <div>
            <HashRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </HashRouter>
        </div>
    );
}

export default App;
