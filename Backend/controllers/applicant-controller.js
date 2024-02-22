
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
    
    const joblist = jobList();
    
    const application = joblist.jobs[jobId].applications;
    const applicationNumber = joblist.jobs[jobId].applications.length;

    if (applicationNumber < 5) {
        application.push(user);
    if(applicationNumber+1 === 5){
       
        joblist.jobs[jobId].status = "closed";
    }
    } else {
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