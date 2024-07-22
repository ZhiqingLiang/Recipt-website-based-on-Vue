// Date:2024/7/21
// Author:Zhiqing Liang

import express from 'express';
import {ChineseNoodles} from '../models/ChineseNoodles.js'
const router = express.Router();

// 这个接口是连接前端，增加菜单的
router.post('/addChineseN',async(req,res)=>{
    console.log('Received data:', req.body); // 打印请求体数据
    try{
        const newCN = new ChineseNoodles({
            ...req.body,//将对象中的所有属性和它们的值展开到新对象中
            id:Date.now()});
        const save = await newCN.save();
        console.log('save receipt:',save)
        res.status(201).send(save); // 返回新添加的菜谱数据
    }catch(error){
        console.error('Error saving recipe:', error); // 打印错误信息
        res.status(400).send(error)
    }
})

// 这个接口是连接前端，获取数据的菜单
router.get('/getChineseN',async(req,res)=>{
    try{
        const receipts = await ChineseNoodles.find();
        console.log(receipts);
        const receiptsData = res.json(receipts);
        // res.send(receiptsData);
        console.log(receiptsData);
    }catch(error){
        res.status(500).send(error);
    }
});

// 删除菜单的
router.delete('/delChineseN/:id',async(req,res)=>{
    try{
        // 请求参数中获取id
        const {id} =req.params; 
        await ChineseNoodles.findByIdAndDelete(id);//根据id删除数据库的内容
        res.status(200).send({ message: 'Recipe deleted' });
    }catch(error){
        res.status(500).send(error);
    }
})

export default router;