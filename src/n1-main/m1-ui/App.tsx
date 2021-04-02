import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import {store} from "../m2-bll/store";

function App() {
    return (
        <HashRouter>
            <Provider store={store}>
                <div className="App">
                    {/*<Main/>*/}
                </div>
            </Provider>
        </HashRouter>

    );
}

export default App;
