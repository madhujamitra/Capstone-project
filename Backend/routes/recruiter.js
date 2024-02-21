const express = require('express');
const router = express.Router();

const {  login } = require('../controllers/recruiter-controller')

router.get('/', (req, res) => {
    
    res.send('Recruiter route is working!');
});

router.route('/login').post((req, res) => {
    const { email, password } = req.body;
    const user = {
      email,
      password
    }
    try {
      const loginValue = login(user);
      console.log(loginValue);
      if (loginValue) {
        return res.status(200).json({ message: "Login successful", user: loginValue });
      } else {
        return res.status(401).json({ error: "Invalid email or password" });
      }
  
    } catch (error) {
      return res.status(404).json({ error: "invalid registration" });
    }
  
  })


module.exports = router;

