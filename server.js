const express = require('express');
const logger  = require('morgan');
const PORT    = process.env.PORT || 3000;


const app = express();

app.set(logger('dev'));

app.listen(PORT, () => console.log('Server running and listening to', PORT));