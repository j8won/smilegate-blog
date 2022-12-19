require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

db.on('error', (error) => {
  console.log(error)
})

db.once('connected', () => {
  console.log('Database Connected');
})

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome!');
})

app.listen(8080, () => {console.log('listening on port 8080');});
