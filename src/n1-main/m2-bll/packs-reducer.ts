import {Dispatch} from "react";
import {loadingAC, loadingACType} from "./registration-reducer";
import {packsAPI} from "../m3-dal/api";
import {AppStateType} from "./store";
import {ThunkAction} from "redux-thunk";
import {cardPacksType, cardType} from "../m1-ui/common/types/types";

export enum ACTIONS_TYPE {
    GET_PACKS = 'Packs/GET_PACKS',
    ADD_PACK = 'Packs/ADD_PACK',
    DELETE_PACK = 'Packs/DELETE_PACK',
    UPDATE_PACK = 'Packs/UPDATE_PACK',
    ERROR_PACK = 'Packs/ERROR_PACK'
}

type initialStateType = { cardPacks: cardPacksType, error: string | null }
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>
type getPacksACType = ReturnType<typeof getPacksAC>
type addPackACType = ReturnType<typeof addPackAC>
type deletePackACType = ReturnType<typeof deletePackAC>
type updatePackACType = ReturnType<typeof updatePackAC>
type errorPackACType = ReturnType<typeof errorPackAC>
type ActionType =
    getPacksACType
    | loadingACType
    | addPackACType
    | deletePackACType
    | updatePackACType
    | errorPackACType

const initialState: initialStateType = {
    cardPacks: [],
    error: null
}

export const packsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ACTIONS_TYPE.GET_PACKS:
            return {
                ...state,
                cardPacks: action.payload.data
            }
        case ACTIONS_TYPE.ADD_PACK:
            return {
                ...state,
                cardPacks: [...state.cardPacks, action.payload.pack]
            }
        case ACTIONS_TYPE.DELETE_PACK:
            return {
                ...state,
                cardPacks: state.cardPacks.filter(p => p._id !== action.payload.id)
            }

        case ACTIONS_TYPE.UPDATE_PACK:
            return {
                ...state,
                cardPacks: state.cardPacks.map(p => p._id === action.payload.id ? {
                    ...p,
                    name: action.payload.name,
                    cardsCount: action.payload.cardsCount
                } : p)
            }

        case ACTIONS_TYPE.ERROR_PACK:
            return {
                ...state,
                error: action.payload.error
            }

        default:
            return state
    }
}

//AC
const getPacksAC = (data: cardPacksType) => ({
    type: ACTIONS_TYPE.GET_PACKS,
    payload: {data}
} as const)

const addPackAC = (pack: cardType) => ({
    type: ACTIONS_TYPE.ADD_PACK,
    payload: {pack}
} as const)

let deletePackAC = (id: string) => ({
    type: ACTIONS_TYPE.DELETE_PACK,
    payload: {id}
} as const)

let updatePackAC = (id: string, name: string, cardsCount: number) => ({
    type: ACTIONS_TYPE.UPDATE_PACK,
    payload: {id, name, cardsCount}
} as const)

let errorPackAC = (error: null | string) => ({
    type: ACTIONS_TYPE.ERROR_PACK,
    payload: {error}
} as const)

//THUNK
export const getPacksTC = (): ThunkType => async (dispatch: Dispatch<ActionType>) => {
    dispatch(loadingAC(true))
    try {
        let data = await packsAPI.getPacks()
        let packs = data.cardPacks
        dispatch(getPacksAC(packs))
        dispatch(loadingAC(false))
    } catch (e) {
        let err = e.response.data.error
        console.log(err)
        dispatch(errorPackAC(err))
        dispatch(loadingAC(false))
    }
}

//THUNK
export const addPackTC = (name: string) => async (dispatch: Dispatch<ActionType>) => {
    dispatch(loadingAC(true))
    try {
        let data = await packsAPI.addPack(name)
        let pack = data.newCardsPack
        dispatch(addPackAC(pack))
        dispatch(loadingAC(false))
    } catch (e) {
        let err = e.response.data.error
        console.log(err)
        dispatch(errorPackAC(err))
        dispatch(loadingAC(false))
    }
}

export const deletePackTC = (id: string): ThunkType => async (dispatch: Dispatch<ActionType>) => {
    dispatch(loadingAC(true))
    try {
        await packsAPI.deletePack(id)
        dispatch(deletePackAC(id))
        dispatch(loadingAC(false))
    } catch (e) {
        let err = e.response.data.error
        console.log(err)
        dispatch(errorPackAC(err))
        dispatch(loadingAC(false))
    }
}

export const updatePackTC = (id: string, name: string, cardsCount: number): ThunkType => async (dispatch: Dispatch<ActionType>) => {
    dispatch(loadingAC(true))
    try {
        let data = await packsAPI.updatePack(id, name, cardsCount)
        console.log("packsAPI.updatePack(id, name, cardsCount)", data)
        dispatch(updatePackAC(data._id, data.name, data.cardsCount))
        dispatch(loadingAC(false))
    } catch (e) {
        let err = e.response.data.error
        console.log(err)
        dispatch(errorPackAC(err))
        dispatch(loadingAC(false))
    }
}


