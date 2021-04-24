import axios from "axios"

export const CorsAnywhereConfig = {
  url: "https://infinite-proxy-cors.herokuapp.com",
}

class CorsAnywhere {
  up(callback) {
    axios.get(CorsAnywhereConfig.url).then(callback)
  }
}

export default new CorsAnywhere()
