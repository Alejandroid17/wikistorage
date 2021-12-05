import axios from "axios"

export const CorsAnywhereConfig = {
  url: "https://nextjs-proxy-cors.vercel.app/api?url=",
}

class CorsAnywhere {
  up(callback) {
    axios.get(CorsAnywhereConfig.url).then(callback)
  }
}

export default new CorsAnywhere()
