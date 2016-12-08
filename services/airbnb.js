const fetch = require('node-fetch');


function getPrediction(req, res, next) {
  fetch(`http://127.0.0.1:4000/predict?month=${req.query.month}&bedrooms=${req.query.bedrooms}&number_of_reviews=${req.query.reviews}&review_scores_rating=${req.query.rating}&neighborhood=${req.query.neighborhood}`)
  // .then(r => r.json())
  .then((data) =>{
    console.log(data)
    res.results = data
    next()
  })
  .catch((err) => {
    next(err)
  })
}


module.exports = {
  getPrediction,
};
