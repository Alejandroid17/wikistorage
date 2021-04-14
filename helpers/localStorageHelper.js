class localStorageHelper {
  static getValue(key, subkey, defaultValue) {
    if (typeof window === "undefined") {
      return defaultValue
    }

    try {
      return (
        JSON.parse(window.localStorage.getItem(key))?.[subkey] ?? defaultValue
      )
    } catch (error) {
      console.error(error)
      return defaultValue
    }
  }

  static setValue(key, JSONValue) {
    window.localStorage.setItem(key, JSON.stringify(JSONValue))
  }
}

export default localStorageHelper
