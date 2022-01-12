const Comic = require('../models/comic')

module.exports = {
    create
}

function create(req, res) {
    console.log(req.params.id, " req.params.id")
    console.log(req.body, " req.body aka the contents of the form")

    Comic.findById(req.params.id, function(err, comicDocument){
        comicDocument.reviews.push(req.body);

        console.log(comicDocument, " <- this is comicDocument, in create reviews CTRL")

        comicDocument.save(function(err){
            res.redirect(`/comics/${comicDocument._id}`)
        })
    })
}