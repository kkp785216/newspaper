const express = require('express');
const imageRoutes = require('./routes/image');
const path = require('path')

const app = express();
app.use(express.urlencoded({extended: true}));
const port = 5000;

app.use(express.static(path.join(`${__dirname}/public`)));

app.use(imageRoutes);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
});