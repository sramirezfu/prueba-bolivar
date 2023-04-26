import { useReducer } from "react";
import { TokenContext, TokenReducer } from ".";

export interface AuthState {
    token: string | null;
}

const TOKEN_INITIAL_STATE: AuthState = {
    token: null,
}
type ProviderProps = {
    children: React.ReactNode,
};

export const TokenProvider = ({ children }: ProviderProps) => {

    const [state, dispatch] = useReducer(TokenReducer, TOKEN_INITIAL_STATE);

    const setToken = (token: any) => {
        dispatch({ type: '[AUTH] - SetToken', payload: token });
    }

    return (
        <TokenContext.Provider value={{
            ...state,
            // Methods
            setToken,
        }}>
            {children}
        </TokenContext.Provider>
    )
}
