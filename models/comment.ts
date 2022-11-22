const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: { type: String, require: true },
    name: { type: String, require: true },
    email: { type: String, require: true },
    website: { type: String },
    post: { type: String, require: true }
}, { timestamps: true });

mongoose.models = {};
export default mongoose.model('Comment', commentSchema);