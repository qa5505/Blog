const db = require('./../dbHelper'),
    mongoose = db.mongoose;

const userSchema = new mongoose.Schema({
    //唯一键
    _id: {type: mongoose.Schema.Types.ObjectId},
    //用户名
    username:{type:String},
    //密码
    password:{type:String},
    //异常信息
    message: {type: String},
    //记录时间
    timestamp: {type: Date},
    //级别
    level: {type: String},
    //详细信息
    meta: {type: mongoose.Schema.Types.Mixed}
});

exports.userModel = mongoose.model('user', userSchema, 'user');