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
    console.log(joblist);
    return joblist;

}

const applicationList = (jobId) => {

    const joblist = jobList();
    console.log(joblist.jobs[jobId].applications);
    return joblist.jobs[jobId].applications;
}

module.exports = {
    login,
    postJob,
    jobList,
    fetchUser,
    applicationList
   
}