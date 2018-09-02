const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    personalInformation: {
        rollno: {type:String, lowercase: true, unique:true},
        studentName: {type: String, lowercase: true},
        fatherName: {type: String, lowercase: true},
        cnic: {type:String, lowercase: true, unique: true},
        address: {type:String, lowercase:true},
        section: {type:Number, lowercase: true},
        gender: {type:String, lowercase: true},
        batch: {type:String, lowercase: true},
        phone: {type:String, lowercase: true},
        email: {type:String, lowercase:true}
    },
    socialmedia: {
        facebook: {type:String, lowercase: true},
        instagram: {type:String, lowercase: true},
        linkedIn: {type:String, lowercase: true},
        twitter: {type:String, lowercase: true}
    },
    professionalInformation: {
        degrees: {type: Array},
        certificates: {type:Array},
        programmes: {type:Array}
    },
    achievements: {
        projects: {type:Array},
        startups: {type:Array},
        funding: {type:Boolean},
        gpa: {type:Number},
        groupName: {type:String},
        projectCollaboration: {type:Boolean},
        researcher: {type:Boolean},
        locJournal: {type:Boolean},
        intJournal: {type:Boolean},
        sCourse: {type:Boolean},
        internships: {type:Boolean},
        recCertifications: {type:Boolean},
        photo: {type: String},
        scholarships: {type: Boolean},
        industrailFundings: {type:Boolean}
    }
});

module.exports = mongoose.model('Student',StudentSchema);