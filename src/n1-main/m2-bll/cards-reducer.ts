import {Dispatch} from "react";
import {loadingAC, loadingACType} from "./registration-reducer";
import {cardsAPI, packsAPI} from "../m3-dal/api";
import {AppStateType} from "./store";
import {ThunkAction} from "redux-thunk";
import {cardPacksType, cardType} from "../m1-ui/common/types/types";

export enum ACTIONS_TYPE {
    GET_CARDS = 'Cards/GET_CARDS',
    ADD_CARDS = 'Cards/ADD_CARDS',
    DELETE_CARDS = 'Cards/DELETE_CARDS',
    UPDATE_CARDS = 'Cards/UPDATE_CARDS',
    ERROR_CARDS = 'Cards/ERROR_CARDS'
}

type initialStateType = { }
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, any>


const initialState: initialStateType = {

}

export const cardsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ACTIONS_TYPE.GET_CARDS:


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
const getCardsAC = (data: cardPacksType) => ({
    type: ACTIONS_TYPE,
    payload: {data}
} as const)


//THUNK
export const getCardsTC = (id: string): ThunkType => async (dispatch: Dispatch<any>) => {
    dispatch(loadingAC(true))
    try {
        let data = await cardsAPI.getCards(id)
        //dispatch(getCardsAC())
        dispatch(loadingAC(false))
    } catch (e) {
        let err = e.response.data.error
        console.log(err)
        //dispatch(errorPackAC(err))
        dispatch(loadingAC(false))
    }
}



