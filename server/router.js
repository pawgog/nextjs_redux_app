const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const news = require('./schema');

router.route('/').get((req, res) => {
  news.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
