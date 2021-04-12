import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../m2-bll/store";
import {logoutTC} from "../../m2-bll/login-reducer";
import {LoginResponseType} from "../common/types/types";

const Profile = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector<AppStateType, boolean>(state => state.login.isAuth);
    const fetch = useSelector<AppStateType, boolean>(state => state.app.isFetching);
    const profileData = useSelector<AppStateType, LoginResponseType>(state => state.login.data);

    const logout = () => {
        dispatch(logoutTC())
    }

    if(!isAuth){
        return <Redirect to={'/login'}/>
    }

    return <div>
        Profile
        <div>
            <img src={profileData.avatar} alt=""/>
            <div>{profileData.name}</div>
        </div>
        <button onClick={logout}>logout</button>
    </div>
}

export default Profile
