module.exports = {
  apps: [
    {
      name: "backend",
      script: "backend/server.js",
      watch: true
    },
    {
      name: "frontend",
      script: "npm",
      args: "start",
      cwd: "./frontend"
    }
  ]
};