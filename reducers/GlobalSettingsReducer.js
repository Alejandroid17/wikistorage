import localStorageHelper from "../helpers/localStorageHelper"

const GlobalSettingsReducer = (state, action) => {
  let newState = state

  const actions = {
    TOGGLE_THEME: () => {
      newState = {
        ...state,
        theme: newState.theme === "light" ? "dark" : "light",
      }
      document.documentElement.setAttribute("theme", newState.theme)
    },
    TOGGLE_COMPACT: () => {
      newState = {
        ...state,
        compact: !newState.compact,
      }
    },
  }
  actions[action.type]()
  localStorageHelper.setValue("settings", newState)
  return newState
}

export default GlobalSettingsReducer
