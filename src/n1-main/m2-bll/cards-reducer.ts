import {Dispatch} from "react";
import {loadingAC, loadingACType} from "./registration-reducer";
import {cardsAPI} from "../m3-dal/api";
import {AppStateType} from "./store";
import {ThunkAction} from "redux-thunk";
import {cardPacksType, cardsType, updatedCardsPackResponseType} from "../m1-ui/common/types/types";

export enum ACTIONS_TYPE {
    GET_CARDS = 'Cards/GET_CARDS',
    ADD_CARDS = 'Cards/ADD_CARDS',
    DELETE_CARDS = 'Cards/DELETE_CARDS',
    UPDATE_CARDS = 'Cards/UPDATE_CARDS',
    ERROR_CARDS = 'Cards/ERROR_CARDS'
}

type initialStateType = {}
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, any>
type getCardsACType = ReturnType<typeof getCardsAC>
type errorCardACType = ReturnType<typeof errorCardAC>
type ActionType =
    getCardsACType
    | loadingACType
    | errorCardACType

const initialState: initialStateType = {}

export const cardsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ACTIONS_TYPE.GET_CARDS:
            return {
                ...state,
                cards: action.payload.data
            }


        case ACTIONS_TYPE.ERROR_CARDS:
            return {
                ...state,
                error: action.payload.error
            }

        default:
            return state
    }
}

//AC
const getCardsAC = (data: cardsType) => ({
    type: ACTIONS_TYPE.GET_CARDS,
    payload: {data}
} as const)

let errorCardAC = (error: null | string) => ({
    type: ACTIONS_TYPE.ERROR_CARDS,
    payload: {error}
} as const)


//THUNK
export const getCardsTC = (id: string): ThunkType => async (dispatch: Dispatch<ActionType>) => {
    dispatch(loadingAC(true))
    try {
        let data = await cardsAPI.getCards(id)
        dispatch(getCardsAC(data.cards))
        console.log("data.cards", data.cards)
        dispatch(loadingAC(false))
    } catch (e) {
        let err = e.response.data.error
        console.log(err)
        //dispatch(errorPackAC(err))
        dispatch(loadingAC(false))
    }
}



