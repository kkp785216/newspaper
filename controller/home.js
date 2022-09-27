const path = require('path');

exports.homepage = (req, res) => {
    return res.sendFile(path.join(`${__dirname}/../views/index.html`));
}