const fs = require("fs");

const fetchUser = () => {
    return JSON.parse(fs.readFileSync("./data/users.json"))
}

const login = (user) => {
    const userList = fetchUser();
    const matchedUser = userList.users.recruiter;
    if(matchedUser.email === user.email && matchedUser.password === user.password){
        return matchedUser;

    }
}

module.exports = {
    login
}