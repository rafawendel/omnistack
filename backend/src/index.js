import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';
import cors from 'cors';

const app = express();

mongoose.connect(
  'mongodb+srv://omnistack:SBJgJPhSqVapj1Rt@cluster0-fhexe.gcp.mongodb.net/omnistack?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);

app.listen(3333);
