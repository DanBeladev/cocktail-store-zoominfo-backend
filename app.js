import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// catch 400
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(400).send(`Error: ${res.originUrl} not found`);
  next();
});

routes(app);

export default app;
