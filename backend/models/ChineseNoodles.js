// Date:2024/7/21
// Author:Zhiqing Liang



import mongoose from "mongoose";
// 验证是否有效的网址
const url = (value)=>{
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlRegex.test(value);
}

const cNoodelsSchema = new mongoose.Schema({
    id:{type:Number,required:true,unique:true},
    name: {type:String,required:true},
    label: {type:String,required:true},
    ingredients:{type:String,required:true},
    cookingtime:{type:String,required:true},
    cookingsteps:{type:String,required:true},
    energy:{type:String,required:true},
    PURL: {
        type:String,
        // validate:{
        //     validator:url,
        //     message: props => `${props.value} is not a valid URL!`
        // },
    },
    VURL: {
        type:String,
        // validate:{
        //     validator:url,
        //     message: props => `${props.value} is not a valid URL!`
        // },
    },
    desc:{type:String,required:true}
})

export const ChineseNoodles = mongoose.model('ChineseNoodles',cNoodelsSchema,'ChineseNoodles')