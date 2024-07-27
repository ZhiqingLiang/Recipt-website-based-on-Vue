// Date:2024/7/27
// Author:Zhiqing Liang

import express from 'express';
import {ChineseNoodles} from '../models/ChineseNoodles.js'
const router = express.Router();

router.get('/api/ChineseNoodles/getID/:id',async(req,res)=>{
    try{
        console.log('Starting to fetch receipts'); // 调试信息
        const receipts = await ChineseNoodles.findById(req.params.id);
        // console.log(receipts);
        if(!receipts){
            console.log('No data found for ID:', req.params.id); // 调试信息
            return res.status(404).semd('Receipt not found')
        }
        res.json(receipts);
    }catch(error){
        console.error('Error fetching item by ID:', error);
        res.status(500).send(error);
    }
});

export default router;