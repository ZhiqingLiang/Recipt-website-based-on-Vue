// Date:2024/7/21
// Author:Zhiqing Liang



const mongoose = require('mongoose');
// 验证是否有效的网址
const url = (value)=>{
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlRegex.test(value);
}

const cNoodelsSchema = new mongoose.Schema({
    name: {type:String,required:true},
    receipt: {type:String,required:true},
    cookingtime:{type:Number,require:true},
    energy:{type:String,required:true},
    PURL: {
        type:String,
        validate:{
            validator:url,
            message: props => `${props.value} is not a valid URL!`
        },
    },
    VURL: {
        type:String,
        validate:{
            validator:url,
            message: props => `${props.value} is not a valid URL!`
        },
    },
    desc:{type:String,required:true}
})

module.exports = mongoose.model('ChineseNoodles',cNoodelsSchema)