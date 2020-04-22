const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
  },
  {
    collection: 'news',
  }
);

module.exports = mongoose.model('News', userSchema);
