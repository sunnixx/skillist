const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
    username : {type: String, unique: true, lowercase: true},
    password : {type: String}
});

UserSchema.pre('save',(next) =>{
    var user = this;
    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10,(err,salt) => {
        if(err) return next(err);
        user.password = 123;
        bcrypt.hash(user.password,salt,null,(err,hash) => {
            if(err) return next(err);
            user.password = hash;
            next();
        })
    })
})

UserSchema.methods = function(password) {
    return bcrypt.compareSync(password,this.password);
}

module.exports = mongoose.model('User',UserSchema);