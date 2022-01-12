const mongoose = require("mongoose");
const Schema = mongoose.Schema

const reviewSchema = new Schema(
    {
        content: String,
        rating: { type: Number, min: 1, max: 5, default: 3}
    },
    {
        timestamps: true,
    }
);

const comicSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    releaseYear: {
        type: Number
    },
    genre: {
        type: String,
        required: true, 
    },
    reviews: [reviewSchema]
})

module.exports = mongoose.model("Comic", comicSchema)