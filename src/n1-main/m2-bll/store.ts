import { combineReducers, applyMiddleware } from 'redux'
import {loginReducer} from "./login-reducer";
import { createStore } from 'redux'
import {registrationReducer} from "./registration-reducer";
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))