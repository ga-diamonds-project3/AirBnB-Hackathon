const router = require('express').Router();
const { getPrediction } = require('../services/airbnb.js');
// http://127.0.0.1:4000/predict
router.post('/predict',(req, res) => {
  console.log('hi sam from server side after react call', req.body)
  res.send('Hi from Sam');
})

module.exports = router
