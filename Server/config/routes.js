const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require('../Models/User');

var message = '';

router.post('/login', async (req, res, next) => {
    passport.authenticate('local', async (err, user, info) => {

        try {
            if (err || !user) {
                return next(err);
            }

            req.login(user, { session: false }, async (err) => {
                if (err) return next(err);

                const body = { _id: user._id, email: user.email };

                const token = jwt.sign({ user: body }, process.env.TOKEN);

                return res.json({ token,user });
            })
        } catch (err) {
            return next(err);
        }
    })(req, res, next);
});

router.get('/studentsignup', (req, res, next) => {
    res.sendFile(__dirname.split('/config')[0] + '/Client/signupStudent.html');
});

router.get('/getstudents', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.send("This works");
});

router.get('/adminsignup', (req, res, next) => {
    res.sendFile(__dirname.split('/config')[0] + '/Client/signupAdmin.html');
})

router.post('/adminsignup', (req, res, next) => {
    var user = new User();

    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function (err) {
        if (err) {
            message = 'Email already exists';
            res.redirect('/adminsignup');
            return;
        }
        res.redirect('/adminsignup');
    });
});

router.get('/getmessage', (req, res, next) => {
    res.json({ message: message });
    message = '';
})

module.exports = router;