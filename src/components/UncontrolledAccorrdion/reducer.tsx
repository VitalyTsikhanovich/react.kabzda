export type ActionType = {
    type: string
}


export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"
export type StateType = {
    collapsed: boolean
}
export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return {
                ...state, collapsed: !state.collapsed
            }

        default:
            throw new Error("Bad action type")
    }
    return state
}

export const toggleCollapsedAC = ( collapsed: boolean)=>({type: "TOGGLE-COLLAPSED", collapsed} as const)

export type toggleCollapsedACType = ReturnType<typeof toggleCollapsedAC>