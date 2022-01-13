const Comic = require('../models/comic')

module.exports = {
    create,
    delete: deleteReview,
    update
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

//Delete Review

function deleteReview(req, res) {
    Comic.findOne( 
        {'reviews._id': req.params.id, 'reviews.userId' : req.user._id},
        function(err, comic){
            if (!comic || err) return res.redirect(`/comics/${comic._id}`);
            comic.reviews.remove(req.params.id);
            comic.save(function(err) {
                res.redirect(`/comics/${comic._id}`);
            });
        }
    );
}

//update review

function update(req, res) {
    Comic.findOne({'reviews._id': req.params.id}, function(err, comic) {
      const reviewSubdoc = comic.reviews.id(req.params.id);
      if(!reviewSubdoc.userId.equals(req.user._id)) return res.redirect(`/comics/${comic._id}`);
      reviewSubdoc.text = req.body.text;
      comic.save(function(err) {
          res.redirect(`/comics/${comic._id}`);
      })
    });
}