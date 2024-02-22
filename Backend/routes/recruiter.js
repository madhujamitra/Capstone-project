const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');


const {  login ,fetchUser,jobList, postJob, applicationList } = require('../controllers/recruiter-controller')

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
});

router.route('/jobs').post((req, res) => {
  const {  title ,description,skills , location , industry } = req.body;

  const newJob = {
     
      title: title,
      description: description,
      skills: skills,
      location: location,
      industry: industry,
      status: "open",
      applications: [],
  }

  try{
    const newJobList = postJob(newJob);

    return res.status(200).send(newJobList);

  }catch(error){
    return res.status(404).json({ error: "invalid value" });
  }

})

router.route('/jobs/:jobId/application').get((req, res) =>{
 const {jobId}  = req.params;
 console.log(jobId)
 try{
 const ApplicationList =  applicationList(jobId);
 return res.status(200).send(ApplicationList);

 }catch(error){
  return res.status(404).json({ error: "invalid application list" });
 }

})

// router.route('/jobs/:jobId/application').put(()=>{

// })

module.exports = router;

