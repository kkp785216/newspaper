const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: { type: String },
    last_name: {type: String},
    email: {type: String, require: true},
    password: {type: String, require: true},
});

export default mongoose.model('User', userSchema);