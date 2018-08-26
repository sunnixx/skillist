const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../Models/User');

//Passport middleware to handle user registration
passport.use('local', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, done) => {
    User.findOne({"email" : email},(err,user) => {
        if(err) return done(null, false);

        if(!user) return done(null,false,{message: 'User not found'});

        if(!user.comparePassword(password)) return done(null,false,{message: 'Password incorrect'});

        return done(null,user);
    }) 
}));

passport.use(new JWTstrategy({
    secretOrKey: process.env.TOKEN,
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('token')
}, async (token, done) => {
    try {
        return done(null, token.user);
    } catch (err) { done(err); }
}))