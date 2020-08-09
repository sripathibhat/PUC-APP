const PROXY_CONFIG = [
    {
        context: [
            "/login",
            "/user",
            "/download",
            "/application"
        ],
        target: "http://l64.99.135.69:8081",
        secure: false,
        "logLevel": "debug",
        "changeOrigin": true
    }
  ]
module.exports = PROXY_CONFIG;