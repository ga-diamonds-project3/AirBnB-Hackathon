const fetch = require('node-fetch');


function getPrediction(req, res, next) {
// console.log(' ************* ',req.body)

  fetch(`http://127.0.0.1:4000/predict?month=${req.body.month}&bedrooms=${req.body.room}&number_of_reviews=${req.body.reviews}&review_scores_rating=${req.body.ratings}&neighborhood=${req.body.neighborhood}`)
  .then(r => r.json())
  .then((data) =>{
    // console.log('*************', data)
    res.results = data
    next()
  })
  .catch((err) => {
    next(err)
  })
}

function getResult(req, res, next) {
// console.log(' ************* ',req.body)
  console.log('hitting getResults!!!!')

  fetch(`http://127.0.0.1:4000/result?month=${req.body.month}&bedrooms=${req.body.room}&number_of_reviews=${req.body.reviews}&review_scores_rating=${req.body.ratings}&neighborhood=${req.body.neighborhood}`)
  .then(r => r.json())
  .then((data) =>{
    console.log('*************', data)
    res.results = data
    next()
  })
  .catch((err) => {
    next(err)
  })
}


module.exports = {
  getPrediction,
  getResult,
};
