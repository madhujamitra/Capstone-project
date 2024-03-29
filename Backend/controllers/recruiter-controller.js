const fs = require("fs");

const fetchUser = () => {
    return JSON.parse(fs.readFileSync("./data/users.json"))
}

const jobList = () => {
    return JSON.parse(fs.readFileSync("./data/jobs.json"))
}


const login = (user) => {
    const userList = fetchUser();
    const matchedUser = userList.users.recruiter;
    if(matchedUser.email === user.email && matchedUser.password === user.password){
        return matchedUser;

    }
}

const postJob = (newJob) => {
    const joblist = jobList();

    const newId = Math.max(...Object.keys(joblist.jobs).map(id => parseInt(id))) + 1;
    joblist.jobs[newId.toString()] = newJob;
    fs.writeFileSync("./data/jobs.json", JSON.stringify(joblist, null, 2));
    
    return joblist;

}

const applicationList = (jobId) => {

    const joblist = jobList();
   
    return joblist.jobs[jobId].applications;
}

const applicationsRejected = (user, jobId, Status) => {
    const joblist = jobList();
    

    const job = joblist.jobs[jobId];
    if(job) {
        job.applications.forEach(application => {
            if (application.id === user.applicantId) {
                application.applicationStatus = Status;
              
            }
        });
    }
  
    fs.writeFileSync("./data/jobs.json", JSON.stringify(joblist, null, 2));
    return joblist.jobs[jobId].applications;
}


const reactivate = (jobId) =>{
    const joblist = jobList();
    const job = joblist.jobs[jobId];
    if (job) {
        const allRejected = job.applications.every(application => application.applicationStatus === "Rejected");
        if (allRejected) {
            joblist.jobs[jobId].applications = [];
            joblist.jobs[jobId].status = "open"
            fs.writeFileSync("./data/jobs.json", JSON.stringify(joblist, null, 2));
            return { message: "All applications rejected. Job reactivated with no applications.", job: joblist.jobs[jobId] };
        } else {
            return { message: "Not all applications are rejected. Please recheck.", job: joblist.jobs[jobId].applications };
        }
    } else {
        return { message: "Job not found." };
    }
    
    fs.writeFileSync("./data/jobs.json", JSON.stringify(joblist, null, 2));
    return joblist.jobs[jobId].job;

}

module.exports = {
    login,
    postJob,
    jobList,
    fetchUser,
    applicationList,
    applicationsRejected,
    reactivate
   
}