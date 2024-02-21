const express = require('express');
const router = express.Router();
const {register} = require('../controllers/applicant-controller')


router.get('/', (req, res) => {
  res.send('Applicant route is working!');
});


router.route('/register').post((req, res) => {
  console.log(req.body);

  const { email, name , password } = req.body; 
  const newUser ={
    email,
    name,
    password
  }
  console.log(newUser);
  
try{
  register(newUser);
  return res.status(200).json(newUser);


} catch (error){
  return res.status(404).json({ error: "invalid registration" });
}
})

module.exports = router;
