const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const userController = require('../controllers/userController');
const { register, login, updateProfile, deleteProfile } = userController;

router.get('/getAllUsers', async (req, res) => {
  try {
    const users = await User.find({});
    if (users) {
      return res.status(200).json(users);
    } else {
      return res.status(400).json({ message: 'No Users Found' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/register', register);
router.post('/login', login);
router.put('/updateProfile/:id', updateProfile);
router.delete('/deleteProfile/:id', deleteProfile);

module.exports = router