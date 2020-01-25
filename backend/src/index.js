const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes.js');
const { setupWebSocket } = require('./websocket.js');

const app = express();
const server = http.createServer(app);

setupWebSocket(server);

mongoose.connect(
  'mongodb+srv://omnistack:SBJgJPhSqVapj1Rt@cluster0-fhexe.gcp.mongodb.net/omnistack?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);

app.use(cors());

app.use(express.json());
app.use(routes);

server.listen(3333);
