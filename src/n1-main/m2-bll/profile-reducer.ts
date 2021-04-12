import {Dispatch} from "redux";

export type ProfileStateType = {
}

const initialState = {} as ProfileStateType

export const profileReducer = (state: typeof initialState = initialState, action: ActionType): ProfileStateType => {
    switch (action.type) {

        default:
            return state
    }
}

//TYPES
type ActionType = any;

//AC

//THUNK

