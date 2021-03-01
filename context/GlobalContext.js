import React, { createContext, useReducer } from "react";

const initialState = {
    theme: 'light',
    compact: false,
}

export const GlobalContext = createContext(initialState);

const GlobalContextReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            let newState = {
                ...state,
                theme: 'light' === state.theme ? 'dark' : 'light'
            };
            document.documentElement.setAttribute('theme', newState.theme);
            return newState;
        case 'TOGGLE_COMPACT':
            return {
                ...state,
                compact: !state.compact
            }
        default: return state;
    }
}

const GlobalContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(GlobalContextReducer, initialState);

    return <GlobalContext.Provider value={[state, dispatch]}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalContextProvider;