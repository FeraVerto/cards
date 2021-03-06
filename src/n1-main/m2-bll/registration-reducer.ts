import {Dispatch} from "react";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {registrationAPI} from "../m3-dal/api";

//variables
export enum ACTIONS_TYPE {
    REDIRECT = 'Registration/REDIRECT',
    LOADING = 'Registration/LOADING',
    ERROR = 'Registration/ERROR',
}

//typing
type redirectACType = ReturnType<typeof redirectAC>
type errorACType = ReturnType<typeof errorAC>
export type loadingACType = ReturnType<typeof loadingAC>
type ActionType = redirectACType | errorACType | loadingACType

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

type initialStateType = typeof initialState


let initialState = {
    isRedirecting: false,
    isLoading: false,
    error: null as string | null
}

export let registrationReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.REDIRECT:
            return {...state, isRedirecting: action.payload.redirect}

        case ACTIONS_TYPE.ERROR:
            return {...state, error: action.payload.error}

        case ACTIONS_TYPE.LOADING:
            return {...state, isLoading: action.payload.loading}
        default:
            return state
    }
}

export let redirectAC = (redirect: boolean) => ({
    type: ACTIONS_TYPE.REDIRECT,
    payload: {redirect}
} as const)

let errorAC = (error: string | null) => ({
    type: ACTIONS_TYPE.ERROR,
    payload: {error}
} as const)

export let loadingAC = (loading: boolean) => ({
    type: ACTIONS_TYPE.LOADING,
    payload: {loading}
} as const)


export let registration = (email: string, password: string): ThunkType => async (dispatch: Dispatch<ActionType>) => {
    dispatch(loadingAC(true))
    try {
        await registrationAPI.registration(email, password)
        dispatch(loadingAC(false))
        dispatch(redirectAC(true))
        dispatch(redirectAC(false))
        dispatch(errorAC(null))
    } catch (e) {
        console.log(e)
        const err = e.response
        dispatch(errorAC(err.data.error))
        dispatch(loadingAC(false))
    }
}

