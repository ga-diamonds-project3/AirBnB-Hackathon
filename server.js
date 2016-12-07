const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const PORT    = process.env.PORT || 3000;

const app = express();

app.set(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => console.log('Server running and listening to', PORT));