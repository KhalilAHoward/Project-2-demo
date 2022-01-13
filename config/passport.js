const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Reader = require("../models/reader")

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
      Reader.findOne({ googleId: profile.id }, function (err, readerDoc) {
        if (err) return cb(err);

        if (readerDoc) {
          return cb(null, readerDoc);
        } else {
          const newReader = new Reader({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          });

          newReader.save(function (err) {
            if (err) return cb(err);
            return cb(null, newReader);
          })
        }
      })
  }
));

passport.serializeUser(function(reader, done) {
  done(null, reader.id);
});

passport.deserializeUser(function(id, done) {
  Reader.findById(id, function (err, readerDoc) {
    done(err, readerDoc);
  })
});



