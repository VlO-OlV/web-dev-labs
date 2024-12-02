import { config } from 'dotenv';
import * as express from 'express';
import { connect } from 'mongoose';
import TextItem from './database/TextItem';
import { json } from 'body-parser';

const app = express();

app.use(json());

config();
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;

connect(dbUrl)
  .then(() => console.log('Connected to db'))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`Started on http://localhost:${port}`);
});

app.get('/textItems', async (req, res) => {
  const textItems = await TextItem.find({});
  res.status(200).json(textItems);
});

app.post('/textItems', async (req, res) => {
  const newTextItem = new TextItem({ ...req.body });
  const error = newTextItem.validateSync();
  if (error) {
    res.status(400).json({message: "Validation failed"});
  } else {
    await newTextItem.save();
    res.status(201).json(newTextItem);
  }
});