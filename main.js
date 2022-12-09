const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();

const videoRoutes = require('./routes/Videos');
const imageRoutes = require('./routes/Images');


app.use(cors());
app.use('/video', videoRoutes);
app.use('/image', imageRoutes);
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile('./dist/index.html');
})


app.listen(3000, '0.0.0.0', () => {
  console.log('Listening on port 3000');
});
