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
            _id:Date.now().toString()
        });
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
        console.log('Starting to fetch receipts'); // 调试信息
        const receipts = await ChineseNoodles.find();
        console.log('Get receiptd',receipts);
        res.json(receipts);
        // res.send(receiptsData);
        // console.log(receiptsData);
    }catch(error){
        res.status(500).json({ message: 'Internal Server Error' }); // 错误处理响应
    }
});

// 删除菜单的
router.delete('/delChineseN/:_id',async(req,res)=>{
    try{
        // 请求参数中获取id
        const {id} =req.params; 
        console.log(`Attempting to delete recipe with id: ${id}`);
        const result = await ChineseNoodles.findOneAndDelete(_id);//根据id删除数据库的内容
        if (!result) {
            res.status(404).json({ message: 'Recipe not found' });
          }else {
            res.status(200).json({ message: 'Recipe deleted' });
          }
    }catch(error){
        res.status(500).send(error);
    }
})

router.get('/getID/:_id',async(req,res)=>{
    try{
        console.log('Starting to fetch receipts'); // 调试信息
        const receipts = await ChineseNoodles.findById(req.params._id);
        // console.log(receipts);
        if(!receipts){
            console.log('No data found for ID:', req.params._id); // 调试信息
            return res.status(404).send('Receipt not found')
        }
        console.log('Fetched data by ID:', receipts);
        res.json(receipts);
    }catch(error){
        console.error('Error fetching item by ID:', error);
        res.status(500).send(error);
    }
});

export default router;