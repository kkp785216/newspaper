const express = require('express');
const imageRoutes = require('./routes/image');
const path = require('path')

const app = express();
app.use(express.urlencoded({extended: true}));
const port = 5000 || process.env.PORT;

app.use(express.static(path.join(`${__dirname}/public`)));

app.use(imageRoutes);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
});