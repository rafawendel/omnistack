import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.20:3333', {
  autoConnect: false
});

export function subscribeToNewDevs(subscribeFn) {
  socket.on('new_dev', subscribeFn);
}

export function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };

  socket.connect();

  socket.on('message', text => {
    console.log(text);
  });
}

export function disconnect() {
  if (socket.connected) socket.disconnect();
}
