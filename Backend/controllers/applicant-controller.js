
const fs = require("fs");

const fetchUser = () => {
    return JSON.parse(fs.readFileSync("./data/users.json"))
  }

const register = (newUser) => {
    const userList = fetchUser();
    console.log(newUser);
    console.log(userList.users.applicants);

userList.users.applicants.push(newUser);
fs.writeFileSync("./data/users.json", JSON.stringify(userList, null, 2))

return newUser;

}

module.exports = { 
    fetchUser,
    register
 }