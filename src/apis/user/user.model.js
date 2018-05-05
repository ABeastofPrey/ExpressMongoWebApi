const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String },     //用户账号
    userpwd: { type: String },      //密码
    logindate: { type: Date }       //最近登录时间
});

module.exports = mongoose.model('User', UserSchema);