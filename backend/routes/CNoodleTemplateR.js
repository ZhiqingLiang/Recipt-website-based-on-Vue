// Date:2024/7/27
// Author:Zhiqing Liang

import express from 'express';
import {ChineseNoodles} from '../models/ChineseNoodles.js'
const router = express.Router();

router.get('/getChineseN/:id',async(req,res)=>{
    try{
        const receipts = await ChineseNoodles.findById(req.params.id);
        // console.log(receipts);
        if(!receipts){
            return res.status(404).semd('Receipt not found')
        }
        res.json(receipts);
    }catch(error){
        res.status(500).send(error);
    }
});

export default router;