const initialState = {}
type InitialStateType = typeof initialState

export const setPassReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        default:
            return state
    }
}


type ActionsType = {
    type: ''
}