import {api} from "../m3-dal/api";
import {Dispatch} from "react";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";

//variables
export enum ACTIONS_TYPE {
    REDIRECT = 'Registration/REDIRECT',
    LOADING = 'Registration/LOADING',
    ERROR = 'Registration/ERROR',
}

//typing
type redirectACType = ReturnType<typeof redirectAC>
type errorACType = ReturnType<typeof errorAC>
type loadingACType = ReturnType<typeof loadingAC>
type ActionType = redirectACType | errorACType | loadingACType

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

type initialStateType = typeof initialState


let initialState = {
    redirect: false,
    isLoading: false,
    error: ""
}

export let registrationReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.REDIRECT:
            return {...state, ...action.payload}

        case ACTIONS_TYPE.ERROR:
            return {...state, ...action.payload}

        case ACTIONS_TYPE.LOADING:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export let redirectAC = (redirect: boolean) => ({
    type: ACTIONS_TYPE.REDIRECT,
    payload: {redirect}
} as const)

let errorAC = (error: string) => ({
    type: ACTIONS_TYPE.ERROR,
    payload: {error}
} as const)

let loadingAC = (loading: boolean) => ({
    type: ACTIONS_TYPE.LOADING,
    payload: {loading}
} as const)


export let registration = (email: string, password: string): ThunkType => async (dispatch: Dispatch<ActionType>) => {
    dispatch(loadingAC(true))
    try {
        await api.registration(email, password)
        dispatch(loadingAC(false))
        dispatch(redirectAC(true))
        dispatch(redirectAC(false))
    } catch (e) {
        const err = e.response
        dispatch(loadingAC(false))
        dispatch(errorAC(err.data.error))
    }
}

