const WebSocket = require("ws");

function WSUtils() {
  const wsu = {};

  wsu.setUpWs = (server) => {
    console.log("Setting web sockets");
    const wss = new WebSocket.Server({ server });
    wss.on("connection", () => {
      console.log("New connection");
    });
  };

  return wsu;
}

module.exports = WSUtils();
