const express = require('express');
const router = express.Router();
const comicsCtrl = require('../controllers/comics')

router.get('/', comicsCtrl.index);
router.get('/new', comicsCtrl.new);
router.get('/:id', comicsCtrl.show);
router.post('/', comicsCtrl.create);

module.exports = router;