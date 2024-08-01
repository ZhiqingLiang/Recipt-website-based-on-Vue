// Date:2024/7/31
// Author:Zhiqing Liang

import mongoose from "mongoose";
// Verify that the URL is valid, but comment it out first for faster testing of the site
const url = (value)=>{
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlRegex.test(value);
}

const ISaladSchema = new mongoose.Schema({
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
    }

})

export const ItalianSalad = mongoose.model('ItalianSalad',ISaladSchema,'ItalianSalad')