const Comic = require('../models/comic');

module.exports ={
    index,
    new: newComic,
    create,
    show
}

function index(req, res){
    Comic.find({}, function(err, comicDocuments){
        res.render('comics/index', {
            title: 'Comics',
            comics: comicDocuments
        })
    })
}

function show(req, res) {
    Comic.findById(req.params.id, function(err, comicDocument) {
	res.render('comics/show', { title: 'Comic Detail', comic : comicDocument });
	});
}



function newComic(req, res){
    res.render('comics/new', {title: 'Comics New'})
}

function create(req, res){
    console.log(req.body)
    Comic.create(req.body, function(err, comicDocument){
        console.log(comicDocument, "< comicDocument");

        res.redirect(`/comics/${comicDocument._id}`);
    })
}


