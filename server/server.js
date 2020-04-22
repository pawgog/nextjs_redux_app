const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 4001;
const app = express();
app.use(cors());

const userRoute = require('./router');

mongoose.Promise = global.Promise;
mongoose
  .connect(
    `mongodb://${process.env.REACT_APP_DB_USER}:${process.env.REACT_APP_DB_PASS}@ds135619.mlab.com:35619/${process.env.REACT_APP_DB_HOST}`,
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

const server = app.listen(PORT, () => {
  console.log('Connected to port ' + PORT);
});

app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
