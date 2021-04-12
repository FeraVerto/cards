import { combineReducers, applyMiddleware } from 'redux'
import {loginReducer} from "./login-reducer";
import { createStore } from 'redux'
import {registrationReducer} from "./registration-reducer";
import thunkMiddleware from 'redux-thunk'
import {profileReducer} from "./profile-reducer";
import {passwordRecoveryReducer} from "./password-recovery-reducer";
import {enterNewPasswordReducer} from "./enter-new-password-reducer";
import {appReducer} from "./app-reducer";

let rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    profile: profileReducer,
    passwordRecovery: passwordRecoveryReducer,
    enterNewPassword: enterNewPasswordReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))