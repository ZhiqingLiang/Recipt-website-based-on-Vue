// Date:2024/7/21
// Author：Zhiqing Liang
// Reference Link:https://www.runoob.com/nodejs/nodejs-mongodb.html
// Reference Link:https://blog.csdn.net/m0_65789515/article/details/132666062
// the rest of the model's js document both reference this links

import mongoose from "mongoose";

//  ----------Login & Register Part -------
  // 定义模式和模型
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String
  });

//   模型定义了集合collection的结构
export const User = mongoose.model('User',userSchema,'usersinfo');