const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema =new Schema({
  post_id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  category: {
    type: String,
    require: true
  },
  thumbnailUrl: String,
  imageUrlArray: [String],
})

module.exports = mongoose.model('Post', postSchema);
