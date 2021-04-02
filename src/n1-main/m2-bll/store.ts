import { combineReducers } from 'redux'
import {loginReducer} from "./login-reducer";
import { createStore } from 'redux'
import {registerReducer} from "./register-reducer";

let rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer
})

export let store = createStore(rootReducer)