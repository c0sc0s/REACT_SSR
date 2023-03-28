import express from 'express';
import path from "path";
import render from './render';

const app = express();
const port = 3000;

app.use(express.static(path.resolve('./public')));

app.get('/', render);

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});