import {Dispatch} from "react";
import {loadingAC, loadingACType} from "./registration-reducer";
import {packsAPI} from "../m3-dal/api";
import {AppStateType} from "./store";
import { ThunkAction } from "redux-thunk";
import {cardPacksType, cardType} from "../m1-ui/common/types/types";

export enum ACTIONS_TYPE {
    GET_PACKS = 'Packs/GET_PACKS',
    ADD_PACK = 'Packs/ADD_PACK'
}

type initialStateType = {cardPacks: cardPacksType}
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>
type getPacksACType = ReturnType<typeof getPacksAC>
type addPackACType = ReturnType<typeof addPackAC>
type ActionType = getPacksACType | loadingACType | addPackACType

const initialState: initialStateType = {
    cardPacks: []
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

        default:
            return state
    }
}

const getPacksAC = (data: cardPacksType) => ({
    type: ACTIONS_TYPE.GET_PACKS,
    payload: {data}
} as const)

const addPackAC = (pack: cardType) => ({
    type: ACTIONS_TYPE.ADD_PACK,
    payload: {pack}
} as const)

export const getPacks = (): ThunkType => async (dispatch: Dispatch<ActionType>) => {
    dispatch(loadingAC(true))
    try {
        let data = await packsAPI.getPacks()
        let packs = data.cardPacks
        dispatch(getPacksAC(packs))
        dispatch(loadingAC(false))
    } catch (e) {
        let err = e.response
        dispatch(loadingAC(false))
    }
}

export const addPack = (name: string) => async (dispatch: Dispatch<ActionType>) => {
    console.log("name pack thunk", name)
    dispatch(loadingAC(true))
    try {
        let data = await packsAPI.addPack(name)
        let pack = data.newCardsPack
        dispatch(addPackAC(pack))
        dispatch(loadingAC(false))
    } catch(e) {
        let err = e.response
        dispatch(loadingAC(false))
    }
}


