const mongoose = require('mongoose');

// Create your User Model
// Must include the googleId like in the passport example

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);