const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    menu: {type: Array},
    menu_background: {type: String},
    footer_background: {type: String}
});

mongoose.models = {};
export default mongoose.model('Config', userSchema);