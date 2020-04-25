const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(cors());

const userRoute = require('./router');

mongoose.Promise = global.Promise;
mongoose
  .connect(
    `mongodb://${process.env.NEXT_DB_USER}:${process.env.NEXT_DB_PASS}@ds135619.mlab.com:35619/${process.env.NEXT_DB_HOST}`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log('DB Connected'))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use('/', userRoute);

const server = app.listen(process.env.PORT, () => {
  console.log('Connected to port ' + process.env.PORT);
});

app.use((req, res, next) => {
  next(console.error('404'));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
