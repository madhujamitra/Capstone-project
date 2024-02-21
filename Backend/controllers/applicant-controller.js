
const fs = require("fs");

const fetchUser = () => {
    return JSON.parse(fs.readFileSync("./data/users.json"))
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

module.exports = {
    fetchUser,
    register,
    login
}