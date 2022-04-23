const initialState = {
    isRegistr: false
}
type InitialStateType = typeof initialState

export const registrReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}