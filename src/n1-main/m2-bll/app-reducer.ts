import {Dispatch} from "redux";

export type initialStateType = {
    isFetching: boolean
}

const initialState = {} as initialStateType

export const appReducer = (state: typeof initialState = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'IS-FETCHING':
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        default:
            return state
    }
}

//TYPES
type ActionType = ReturnType<typeof isFetchingAC>;

//AC
export const isFetchingAC = (isFetching: boolean) => ({
    type: 'IS-FETCHING',
    payload: {isFetching}
} as const)

//THUNK
