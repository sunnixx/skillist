const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require('../Models/User');
const Student = require('../Models/Students');

var message = '';

router.post('/login', async (req, res, next) => {
    console.log(req.body);
    passport.authenticate('local', async (err, user, info) => {

        try {
            if (err || !user) {
                return next(err);
            }

            req.login(user, { session: false }, async (err) => {
                if (err) return next(err);

                const body = { _id: user._id, email: user.email };

                const token = jwt.sign({ user: body }, process.env.TOKEN);

                return res.json({ token,isLogged: true });
            })
        } catch (err) {
            return next(err);
        }
    })(req, res, next);
});

router.get('/studentsignup', (req, res, next) => {
    res.sendFile(__dirname.split('/config')[0] + '/Client/signupStudent.html');
});

router.post('/studentsignup',(req,res,next) => {
    let rollNo = req.body.rollno;
    let name = req.body.name;
    let fatherName = req.body.fatherName;
    let cnic = req.body.cnic;
    let address = req.body.address;
    let section = req.body.section;
    let gender = req.body.gender;
    let batch = req.body.batch;
    let phone = req.body.phone;
    let email = req.body.email;
    let facebook = req.body.facebook;
    let twitter = req.body.twitter;
    let linkedin = req.body.linkedin;
    let instagram = req.body.instagram;
})

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

router.post('/searchStudents',passport.authenticate('jwt',{session: false}), (req,res,next) => {
    let search = req.body.search;

    Student.find({personalInformation: {studentName: search}},(err,student) => {
        if(err) return next(err);

        if(student.length <= 0) {
            res.json({students: false, message: 'No students were found'});
        } else {
            res.json({students: student});
        }
    })
})

router.get('/getmessage', (req, res, next) => {
    res.json({ message: message });
    message = '';
})

module.exports = router;