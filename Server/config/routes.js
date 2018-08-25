const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require('../Models/User');

router.post('/login',(req,res,next) => {
    passport.authenticate('local',{session:false},(err,user,info) => {
        if(err || !user) {
            return res.sendStatus(400).json({
                message: 'Something went wrong',
                user: user
            });
        }

        req.login(user, {session: false}, (err) => {
            if(err) {
                res.send(err);
            }

            const token = jwt.sign(user,process.env.TOKEN);
            return res.json({user:token});
        })
    })(req,res);
});

router.get('/studentsignup',(req,res,next) => {
    let path = __dirname.split('/config');
    res.sendFile(`${path[0]}/Client/signupStudent.html`);
});

router.post('/admin/signup',(req,res,next) => {
    let user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    
    User.find({username: user.username},(err,user) => {
        if(err) return next(err);

        if(user.length > 0) {
            return next();
        }

        if(!user) {
            user.save((err) => {
                if(err) return next(err);
            })
        }
    })
})

module.exports = router;