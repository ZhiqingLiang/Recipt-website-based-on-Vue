// Date:2024/7/31
// Author:Zhiqing Liang

import express from 'express';
import {ItalianPasta} from '../models/ItalianPasta.js'
import mongoose from 'mongoose';
const router = express.Router();

// This interface is for connecting to the front-end and adding menus.
router.post('/addItalianP',async(req,res)=>{
    console.log('Received data:', req.body); // Print the request body data
    try{
        const newIP = new ItalianPasta({
            ...req.body, //Expand all properties and their values in the object to the new object
        });
        // Preventing the addition of identical recipes
        const duplicate = await ItalianPasta.findOne({name:req.body.name})
        if(duplicate){
            return res.status(400).json({ 
                success: false, 
                errorCode:'DUPLICATE_RECIPE', // 'errorCode' as a condition
                message: 'Recipe already exists' });
        }else{
            const save = await newIP.save();
            console.log('save receipt:',save)
            //return data to frontend
            res.status(201).json({
                success:true,
                message:"recipe added successfully",
                recipe:save,
            });
        }
    }catch(error){
        console.error('Error saving recipe:', error); 
        res.status(400).send(error)
    }
})

// This interface is to connect to the front-end and get data for the menu
router.get('/getItalianP',async(req,res)=>{
    try{
        console.log('Starting to fetch recipes'); // Debugging information
        const recipes = await ItalianPasta.find();
        console.log('Get receiptd',recipes);
        res.json(recipes);
        // res.send(recipesData);
        // console.log(recipesData);
    }catch(error){
        res.status(500).json({ message: 'Internal Server Error' }); // Error handling response
    }
});

// Delete the menu's
router.delete('/delItalianP/:id',async(req,res)=>{
    try{
       // Get the id in the request parameters
        // const {id} =req.params; 
        const id = req.params.id
         // verify that the ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send('Invalid ID');
        }
        const ObjectId = new mongoose.Types.ObjectId(id);
        console.log(`Attempting to delete recipe with id: ${id}`);
        const result = await ItalianPasta.findOneAndDelete(ObjectId);//Delete the contents of the database according to id
        if (!result) {
            res.status(404).json({ message: 'Recipe not found' });
          }else {
            res.status(200).json({ message: 'Recipe deleted' });
          }
    }catch(error){
        res.status(500).send(error);
    }
})

router.get('/getID/:id',async(req,res)=>{
    try{
        const id = req.params.id;

        // verify that the ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send('Invalid ID');
        }
    
        console.log('Starting to fetch recipes'); 
        const ObjectId = new mongoose.Types.ObjectId(id);
        const recipes = await ItalianPasta.findById(ObjectId);
        // console.log(recipes);
        if(!recipes){
            console.log('No data found for ID:', id); 
            return res.status(404).send('Receipt not found')
        }
        console.log('Fetched data by ID:', recipes);
        res.json(recipes);
    }catch(error){
        console.error('Error fetching item by ID:', error);
        res.status(500).send(error);
    }
});

export default router;