const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Post',
  },
});

module.exports = mongoose.model('Like', likeSchema);
