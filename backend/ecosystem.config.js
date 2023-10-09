module.exports = {
  apps: [{
        name: "aws-trial",
        script: "./build/index.js",
        env: {
            "PORT": 3333,
            "NODE_ENV": "production"
        }
    }]
}