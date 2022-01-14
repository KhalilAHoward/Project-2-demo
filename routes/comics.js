const express = require('express');
const router = express.Router();
const comicsCtrl = require('../controllers/comics')

//view all comics
router.get('/', comicsCtrl.index);

//create comic form
router.get('/new', isLoggedIn, comicsCtrl.new);

//show comic
router.get('/:id', comicsCtrl.show);

//post comic
router.post('/',  comicsCtrl.create);

function isLoggedIn(req, res, next) {
    if( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}


module.exports = router;