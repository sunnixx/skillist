const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require('../Models/User');

var message = '';

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
    res.sendFile(__dirname.split('/config')[0] + '/Client/signupStudent.html');
});

router.get('/getstudents',passport.authenticate('jwt',{session: false}),(req,res,next) => {
    res.send("This works");
});

router.get('/adminsignup',(req,res,next) => {
    res.sendFile(__dirname.split('/config')[0] + '/Client/signupAdmin.html');
})

router.post('/adminsignup',(req,res,next) => {
    var user = new User();

    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function(err) {
        if(err) {
            message = 'Email already exists';
            res.redirect('/adminsignup');
            return;
        }
        res.redirect('/adminsignup');
    });
});

router.get('/getmessage',(req,res,next) => {
    res.json({message: message});
    message = '';
})

module.exports = router;