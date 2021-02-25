import mongoose from 'mongoose';

const postSchem = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const PostMessage = mongoose.model('PostMessage', postSchem);

export default PostMessage;