// Date:2024/7/21
// Author:Zhiqing Liang

const express = require('express');
const router = express.Router();
const ChineseNoodles = require('../models/ChineseNoodles')

// 这个接口是连接前端，增加菜单的
router.post('/api/addChineseN',async(req,res)=>{
    try{
        const newCN = new ChineseNoodles(req.body);
        await newCN.save();
    }catch(error){
        res.status(400).send(error)
    }
})

// 这个接口是连接前端，获取数据的菜单
router.get('/getChineseN',async(req,res)=>{
    try{
        const receipts = await ChineseNoodles.find();
        res.send(receipts);
    }catch(error){
        res.status(500).send(error);
    }
});

// 删除菜单的
router.delete('/delChineseN',async(req,res)=>{
    try{
        // 请求参数中获取id
        const {id} =req.params; 
        await ChineseNoodles.findByIdAndDelete(id);//根据id删除数据库的内容
        res.status(200).send({ message: 'Recipe deleted' });
    }catch(error){
        res.status(500).send(error);
    }
})

module.exports = router;