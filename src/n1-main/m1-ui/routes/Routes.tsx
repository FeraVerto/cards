import React from "react";
import {Redirect, Route, Switch } from "react-router-dom";
import Login from "../login/Login";
import {Registration} from "../registration/Registration";
import Profile from "../profile/Profile";
import {EnterNewPassword} from "../enterNewPassword/EnterNewPassword";
import {PasswordRecovery} from "../passwordRecovery/PasswordRecovery";
import Error404 from "../error404/Error404";
import Table from "../Table";
import {Packs} from "../packs/Packs";
import {Cards} from "../cards/Cards";


export const PATH = {
    LOGIN: "/login",
    REGISTRATION: "/registration",
    PROFILE: "/profile",
    NEW_PASS : "/enter-new-password/:token",
    RESET_PASS: "/password-recovery",
    TEST: "/show-all",
    PACKS: "/packs",
    CARDS: "/cards"
}

export const Routes = () => {
    return (
        <div>
            <Switch>

                <Route path={"/"} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.NEW_PASS} render={() => <EnterNewPassword/>}/>
                <Route path={PATH.RESET_PASS} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.PACKS} render={() => <Packs/>}/>
                <Route path={PATH.CARDS} render={() => <Cards/>}/>
{/*
                <Route path={PATH.TEST} render={() => <ShowAllComponents/>}/>
*/}

                у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}