const express = require('express');
const app = express();

const cors = require("cors");
const PORT = process.env.PORT || 8080;
const Applicant = require('./routes/applicant')
const Recruiter = require('./routes/recruiter') 

app.use(cors());

app.use(express.json())

app.use('/api/Applicant', Applicant);
app.use('/api/Recruiter', Recruiter);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})