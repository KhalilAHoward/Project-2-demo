const express = require('express');
const router = express.Router();
const comicsCtrl = require('../controllers/comics')

router.get('/', comicsCtrl.index);
router.get('/new', isLoggedIn, comicsCtrl.new);
router.get('/:id', comicsCtrl.show);
router.post('/',  comicsCtrl.create);

function isLoggedIn(req, res, next) {
    if( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}


module.exports = router;