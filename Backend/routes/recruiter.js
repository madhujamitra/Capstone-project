const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');


const {  login ,fetchUser,jobList,reactivate, postJob, applicationList, applicationsRejected } = require('../controllers/recruiter-controller')

router.get('/jobs', (req, res) => {

  const joblist = jobList()
 try{
 console.log(joblist);
  return res.status(200).json(joblist);
 }catch(error){
  return res.status(401).json({ error: "Invalid list" });
 }
});

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

 try{
 const ApplicationList =  applicationList(jobId);
 return res.status(200).send(ApplicationList);

 }catch(error){
  return res.status(404).json({ error: "invalid application list" });
 }

})

router.route('/jobs/:jobId/application').put((req, res)=>{
  
  //this api is for deleting or accepting the candiate for job profile also if the no candidate is left , recuiter will update the job posting again as status open
  const { jobId } = req.params;
  const { applicantId ,applicationStatus, status } = req.body;
  
  const user = {
    applicantId,
    applicationStatus
  }
  const Status = status ;
 
  try{
    const RejectedStatus = applicationsRejected(user, jobId , Status);
    return res.status(200).send(RejectedStatus);

  }catch(error){
    return res.status(404).json({ error: "invalid value" });
  }

})

router.route('/jobs/:jobId/reactivate').put((req, res) => {
  const { jobId } = req.params;
  try {
    const Reactivate = reactivate(jobId);

    return res.status(200).send(Reactivate);
  } catch (error) {
    return res.status(404).json({ error: "invalid value" });
  }

})

module.exports = router;

