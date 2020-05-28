const WebSocket = require("ws");

function WSUtils() {
  const wsu = {};
  let clients=[];

  wsu.setUpWs = (server) => {
    console.log("Setting web sockets");
    const wss = new WebSocket.Server({ server });
    wss.on("connection", (ws) => {
      console.log("New connection");
      clients.push(ws);
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
