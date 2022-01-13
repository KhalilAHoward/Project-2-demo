const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


router.post('/comics/:id/reviews', isLoggedIn, reviewsCtrl.create);
router.delete('/reviews/:id', reviewsCtrl.delete)
router.put('/reviews/:id', reviewsCtrl.update)

function isLoggedIn(req, res, next) {
    if( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

 
module.exports = router;