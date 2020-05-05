const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    date: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    collection: 'info',
  }
);

module.exports = mongoose.model('Info', userSchema);
