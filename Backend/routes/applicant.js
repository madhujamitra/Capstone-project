const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { register, login } = require('../controllers/applicant-controller')


router.get('/', (req, res) => {
  res.send('Applicant route is working!');
});


router.route('/register').post((req, res) => {
  const { email, name, password } = req.body;
  const newUser = {
    id:uuidv4(),
    email,
    name,
    password
  }
  try {
    register(newUser);
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(404).json({ error: "invalid registration" });
  }
})


router.route('/login').post((req, res) => {
  const { email, password } = req.body;
  const user = {
    email,
    password
  }

  try {
    const loginValue = login(user);
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
