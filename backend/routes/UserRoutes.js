// Date:2024/7/21
// Author:Zhiqing Liang

import express from 'express';
import {User} from '../models/Users.js'
const router = express.Router();


//receive data from front end
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Received login request:', req.body); 
    try {
      const user = await User.findOne({ username, password });
      console.log('Login attempt with:', { username, password });
      console.log('Database query result:', user);
      if (user) {
        res.status(200).json({ success: true, username: user.username });
      } else {
        res.status(401).json({ success: false });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: 'There is an error while logging in' });
    }
  });


router.post('/register', async (req, res) => {
const { username, password, email } = req.body;
try {
    const existingUser = await User.findOne({ email: email.toLowerCase() }); 
    if (existingUser) {
        return res.status(400).json({ 
          success: false, 
          errorCode:'ACCOUNT_EXIST',
          message: 'Email already exists' });
    }else{
        const newUser = new User({ username: username, password: password, email: email });
        await newUser.save();// save in database
        res.status(201).json({ success: true, message: 'User registered successfully' });
        }
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ success: false, message: 'There is an error while registering' });
        }
    });

//export model and import in serve.js
export default router

