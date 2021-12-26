import localStorageHelper from "../helpers/localStorageHelper"

const GlobalSettingsReducer = (state, action) => {
  let newState = state

  const actions = {
    TOGGLE_THEME: () => {
      newState = {
        ...state,
        theme: newState.theme === "light" ? "dark" : "light",
      }
      document.documentElement.classList.remove(state.theme)
      document.documentElement.classList.add(newState.theme)
    },
    TOGGLE_COMPACT: () => {
      newState = {
        ...state,
        compact: !newState.compact,
      }
    },
    TOGGLE_DRAWER: () => {
      newState = {
        ...state,
        drawer: {
          isOpen: !state.drawer.isOpen,
        },
      }
    },
    SET_TOTAL_NUMBER_ELEMENTS: () => {
      newState = {
        ...state,
        totalNumberElements: action.value,
      }
    },
  }
  actions[action.type]()
  localStorageHelper.setValue("settings", newState)
  return newState
}

export default GlobalSettingsReducer
