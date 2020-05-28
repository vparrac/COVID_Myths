const WebSocket = require("ws");

function WSUtils() {
  const wsu = {};
  let clients = new Set();

  wsu.setUpWs = (server) => {
    const wss = new WebSocket.Server({ server });
    wss.on("connection", (ws) => {
      clients.add(ws);
      ws.on("close", (ev) => {
        clients.delete(ws);
      });
    });
  };

  wsu.notifyAll = (data) => {    
    clients.forEach(ws => {
      console.log("Notify all");
      ws.send(data);
    });
  };

  return wsu;
}

module.exports = WSUtils();
