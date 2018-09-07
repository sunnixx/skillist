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
    let student = new Student();

    student.personalInformation.rollno = req.body.rollNo;
    student.personalInformation.name = req.body.name;
    student.personalInformation.fatherName = req.body.fatherName;
    student.personalInformation.cnic = req.body.cnic;
    student.personalInformation.address = req.body.address;
    student.personalInformation.section = req.body.section;
    student.personalInformation.gender = req.body.gender;
    student.personalInformation.batch = req.body.batch;
    student.personalInformation.phone = req.body.phone;
    student.personalInformation.email = req.body.email;

    student.socialmedia.facebook = req.body.facebook;
    student.socialmedia.twitter = req.body.twitter;
    student.socialmedia.linkedin = req.body.linkedin;
    student.socialmedia.instagram = req.body.instagram;

    student.professionalInformation.degrees = req.body.degreeValues;
    student.professionalInformation.certificates = req.body.certificateValues;
    student.professionalInformation.programmes = req.body.programmeValues;

    student.achievements.projects = req.body.projectValues;
    student.achievements.startups = req.body.startupValues;
    student.achievements.funding = req.body.funding;
    student.achievements.recCertifications = req.body.recCertifications;
    student.achievements.scholarships = req.body.scholarships;
    student.achievements.industrailFunding = req.body.industrailFunding;
    student.achievements.gpa = req.body.gpa;
    student.achievements.groupName = req.body.groupName;
    student.achievements.projectCollaboration = req.body.projectCollaboration;
    student.achievements.researcher = req.body.researcher;
    student.achievements.locJournal = req.body.locJournal;
    student.achievements.intJournal = req.body.intJournal;
    student.achievements.sCourse = req.body.sCourse;
    student.achievements.interships = req.body.internships;

    student.save((err) => {
        if(err) return next(err);

        res.json({msg: 'Data has been saved'});
    })

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

router.post('/searchStudents', (req,res,next) => {
    let search = req.body.search;

    Student.find({'personalInformation': {"$elemMatch" : {'name' : search}}},(err,student) => {
        if(err) return next(err);

        if(student.length <= 0) {
            res.json({students: false, message: 'No students were found'});
        } else {
            res.json({students: student});
        }
    })
})

router.post('/searchByName',(req,res,next) => {
    let name = req.body.name;

    Student.find({'personalInformation' : {'$elemMatch' : {'name' : name}}}, (err,student) => {
        if(err) return next(err);

        if(student.length <= 0) {
            res.json({students: false, message: 'No student(s) were found'});
        } else {
            res.json({students: student});
        }
    });
});

router.post('/searchByBatch',(req,res,next) => {
    let batch = req.body.batch;

    Student.find({'personalInformation' : {'$elemMatch' : {'batch' : batch}}}, (err,student) => {
        if(err) return next(err);

        if(student.length <= 0) {
            res.json({students: false, message: 'No student(s) were found'});
        } else {
            res.json({students: student});
        }
    });
});

router.post('/searchByEmail',(req,res,next) => {
    let email = req.body.email;

    Student.find({'personalInformation' : {'$elemMatch' : {'email' : email}}}, (err,student) => {
        if(err) return next(err);

        if(student.length <= 0) {
            res.json({students: false, message: 'No student(s) were found'});
        } else {
            res.json({students: student});
        }
    });
});

router.post('/searchByCnic',(req,res,next) => {
    let cnic = req.body.cnic;

    Student.find({'personalInformation' : {'$elemMatch' : {'cnic' : cnic}}}, (err,student) => {
        if(err) return next(err);

        if(student.length <= 0) {
            res.json({students: false, message: 'No student(s) were found'});
        } else {
            res.json({students: student});
        }
    });
});

router.post('/searchByGpa',(req,res,next) => {
    let gpa = req.body.gpa;

    Student.find({'personalInformation' : {'$elemMatch' : {'gpa' : gpa}}}, (err,student) => {
        if(err) return next(err);

        if(student.length <= 0) {
            res.json({students: false, message: 'No student(s) were found'});
        } else {
            res.json({students: student});
        }
    });
});

router.post('/searchByGroup',(req,res,next) => {
    let group = req.body.group;

    Student.find({'personalInformation' : {'$elemMatch' : {'group' : group}}}, (err,student) => {
        if(err) return next(err);

        if(student.length <= 0) {
            res.json({students: false, message: 'No student(s) were found'});
        } else {
            res.json({students: student});
        }
    });
});

router.get('/getmessage', (req, res, next) => {
    res.json({ message: message });
    message = '';
})

module.exports = router;