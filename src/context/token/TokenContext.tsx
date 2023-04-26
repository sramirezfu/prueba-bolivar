import { createContext } from 'react';

interface Auth {
    token: string | null;
    setToken: (token: string | null) => void;
}

export const TokenContext = createContext<Auth | null>(null);