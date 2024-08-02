// Date:2024/7/21
// Author：Zhiqing Liang
// Reference Link:https://www.runoob.com/nodejs/nodejs-mongodb.html
// Reference Link:https://blog.csdn.net/m0_65789515/article/details/132666062
// the rest of the model's js document both reference this links

import mongoose from "mongoose";

//  ----------Login & Register Part -------
  // define model
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
  });

// connect to collections-> 'usersinfo', and export model name 'userSchema'
export const User = mongoose.model('User',userSchema,'usersinfo');