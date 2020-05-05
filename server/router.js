const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const info = require('./schema');

router.route('/').get((req, res) => {
  info.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
