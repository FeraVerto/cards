import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from "./header/Header";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";
import {Registration} from "./registration/Registration";
import {Login} from "./Login";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Route path="/login" render={() => <Login/>}/>
            <Route path="/registration" render={() => <Registration/>}/>
            <Route path="/profile" render={() => "Profile"}/>
            <Route path="/recovery" render={() => "Password recovery"}/>
            {/*<Route path="/new" render={() => "Entering a new password"}/>
            <Route path="/input" render={() => <SuperInputText/>}/>
            <Route path="/button" render={() => <SuperButton/>}/>
            <Route path="/checkbox" render={() => <SuperCheckbox/>}/>
            <Route path="/404" render={() => "404"}/>*/}
        </div>
    );
}

export default App;
