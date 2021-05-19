import React, { createContext, useReducer } from "react"
import localStorageHelper from "../helpers/localStorageHelper"
import GlobalSettingsReducer from "../reducers/GlobalSettingsReducer"

const defaultSettings = {
  drawer: {
    isOpen: false,
  },
  theme: "light",
  compact: localStorageHelper.getValue("settings", "compact", true),
  totalNumberElements: 0,
}

export const GlobalContext = createContext(defaultSettings)

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalSettingsReducer, defaultSettings)

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
