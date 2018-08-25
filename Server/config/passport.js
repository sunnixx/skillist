const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;


const User = require('../Models/User');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},(email,password, cb) => {
    return User.findOne({email,password})
    .then(user => {
        if(!user) {
            return cb(null, false, {message: 'Incorrect email or password'});
        }

        return cb(null,user,{message: 'Logged In successfully'});
    })
    .catch(err => cb(err));
}));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : process.env.TOKEN
},(jwtPayload,cb) => {
    return User.findById(jwtPayload.id)
    .then(user => {
        return cb(null, user);
    })
    .catch(err => {
        return cb(err);
    })
})); 