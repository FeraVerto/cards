type initialStateType = {
    a: number
}
const initialState: initialStateType = {
    a: 1
}

export const cardsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case '':
            return state
        default:
            return state
    }
}