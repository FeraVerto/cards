import React, { useEffect } from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';
import {useDispatch} from "react-redux";
import {Routes} from "./routes/Routes";
import Nav from "./nav/Nav";
import {isAuthTC} from "../m2-bll/login-reducer";


function App() {

       useEffect(() => {
        dispatch(isAuthTC())
    }, [])

    //const auth = useSelector<RootStateType, boolean>(state => state.login.isAuth);
    const dispatch = useDispatch();

  return (
      <HashRouter>
          <Nav/>
          <Routes/>
      </HashRouter>
  );
}

export default App;
