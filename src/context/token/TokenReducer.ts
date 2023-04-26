import { AuthState } from "./TokenProvider";

type AuthActionType =
    | { type: '[AUTH] - SetToken', payload: string }


export const TokenReducer = (state: AuthState, action: AuthActionType) => {
    console.log(state);

    console.log(state, action);
    switch (action.type) {
        case '[AUTH] - SetToken':
            return {
                ...state,
                token: action.payload
            }
        default:
            return state;
    }
}