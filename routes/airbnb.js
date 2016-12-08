const router = require('express').Router();
const { getPrediction, getResult } = require('../services/airbnb.js');
// http://127.0.0.1:4000/predict
router.post('/predict', getPrediction, (req, res) => {
  // console.log('hi sam from server side after react call', req.body)
  res.json(res.results)
})

router.post('/result', getResult, (req, res) => {
  // console.log('hi sam from server side after react call', req.body)
  console.log('HITTING RESULTS')
  res.json(res.results)
})

module.exports = router
