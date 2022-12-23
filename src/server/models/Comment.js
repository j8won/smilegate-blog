const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'Post',
  },
  comment: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model('Comment', commentSchema);
