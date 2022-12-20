const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  category: {
    type: String,
    require: true
  },
  thumbnailUrl: String,
  imageUrlArray: [String],
});

module.exports = mongoose.model('Post', postSchema);
