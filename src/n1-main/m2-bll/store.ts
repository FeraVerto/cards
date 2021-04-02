import { combineReducers } from 'redux'
import {loginReducer} from "./login-reducer";
import { createStore } from 'redux'

let rootReducer = combineReducers({
    login: loginReducer
})

export let store = createStore(rootReducer)