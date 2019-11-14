const WebSocket = require('ws');

const wsServer = new WebSocket.Server({port: 4000});

let counter = 0;

wsServer.on('connection', (ws) => {
  console.log('WebSocket connection to port: 4000!');

  const timer = () => {
    ws.send(JSON.stringify({
      event: 'alarms',
      data: {
        key: 'testKey',
        count: ++counter
      }
    }));
  };

  const interval = setInterval(timer, 5000);

  ws.on('close', () => {
    console.log('disconnected');
    clearInterval(interval);
  });

});
