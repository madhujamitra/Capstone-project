const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { register, login , jobList , jobApply} = require('../controllers/applicant-controller')


router.get('/', (req, res) => {
  res.send('Applicant route is working!');
});


router.route('/register').post((req, res) => {
  const { email, name, password, skill, yearOfExperience } = req.body;
  const newUser = {
    id:uuidv4(),
    sessionId: uuidv4(),
    email,
    name,
    password,
    skill,
    yearOfExperience
  }
  console.log(newUser);
  try {
    register(newUser);
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(404).json({ error: "invalid registration" });
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

router.route('/jobs').get((req, res) => {

  try {
    const joblist = jobList();
    res.send(joblist);
  } catch (error) {
    return res.status(404).json({ error: "invalid" });
  }
})

router.route('/jobs/apply/:id').post((req, res) => {
  //res body should have id of the job which has been applied  and user who have applied to the position
  const { applicantId,email, name  } = req.body;
  const { id } = req.params;

  const user = {
    applicantId,
    email,
    name,
  }
  
  try {
    const jobApplied = jobApply(user , id )
let response;
    if(jobApplied.status === "closed"){
       response = {
        message : "Application closed.",
        jobId : jobApplied.id,
        status : jobApplied.status
        };
    } else {
       response = {
        message : "Application successful.",
        jobId : jobApplied.id,
        status : jobApplied.status
        };
    }
   
    res.status(200).send(response);

  } catch (error) {
    return res.status(404).json({ error: "invalid" });

  }

})



module.exports = router;
