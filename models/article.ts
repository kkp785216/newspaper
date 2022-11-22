const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    parent_category: { type: String, default: null },
    category: { type: String, require: true },
    sub_category: { type: [String] },
    title: { type: String, require: true },
    author: { type: String, require: true },
    status: { type: String, require: true, default: 'published' },
    views: { type: Number, require: true },
    url: { type: String, require: true },
    date: { type: String, require: true },
    img_url: { type: String, default: null },
    img_comp: { type: String, default: null },
    content: { type: String, require: true },
    content_type: { type: String, require: true, default: 'common' },
    order: { type: Number, default: 1 },
    template: { type: Number, default: 1 },
}, {timestamps: true});

mongoose.models = {};
export default mongoose.model('Article', articleSchema);