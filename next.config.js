// next.config.js
module.exports = {
    async headers() {
      return [
        {
          headers: [
            { key: "Access-Control-Allow-Origin", value: "*" },
          ]
        }
      ]
    }
  };