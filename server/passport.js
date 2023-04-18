const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "1081497021996-6e08d1rtm6d84i2hsieknn6fcuvv8eve.apps.googleusercontent.com", // Your Credentials here.
      //clientID: "bbmt66abthr8h95uv1nioiqjn1o3r09t.apps.googleusercontent.com",
      clientSecret: "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",
      //clientSecret: "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", // Your Credentials here.
      callbackURL: "http://localhost:8080/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
