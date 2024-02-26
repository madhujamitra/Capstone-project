
const fs = require("fs");

const fetchUser = () => {
    return JSON.parse(fs.readFileSync("./data/users.json"))
}

const jobList = () => {
    return JSON.parse(fs.readFileSync("./data/jobs.json"))
   
}


const register = (newUser) => {
    const userList = fetchUser();
    userList.users.applicants.push(newUser);
    fs.writeFileSync("./data/users.json", JSON.stringify(userList, null, 2))

    return newUser;

}

const login = (user) => {
    const userList = fetchUser();
    const matchedUser = userList.users.applicants.find((applicant) => {
        return applicant.email === user.email && applicant.password === user.password;
    });

    return matchedUser;
}



const jobApply = (user, jobId) => {
    console.log(jobId, "jobid")
    const joblist = jobList();
    const userList = fetchUser();
    //console.log(joblist.jobs[jobId]);
   
    const selectedApplicant = userList.users.applicants.find(applicant => applicant.id === user.applicantId);
    const application = joblist.jobs[jobId].applications;
    const applicationNumber = joblist.jobs[jobId].applications.length;
   console.log(selectedApplicant);
    if (applicationNumber < 5) {
        console.log("push");
        application.push(selectedApplicant);
    if(applicationNumber+1 === 5){
        console.log("failed + 1");
        joblist.jobs[jobId].status = "closed";
    }
    } else {
        console.log("failed 2");
        joblist.jobs[jobId].status = "closed";
    }
    fs.writeFileSync("./data/jobs.json", JSON.stringify(joblist, null, 2))

   return joblist.jobs[jobId];

}

module.exports = {
    fetchUser,
    register,
    login,
    jobList,
    jobApply
}