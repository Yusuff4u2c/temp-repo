const { firsName, lastName } = require('./name')
const greet = (name) => {
    console.log(`hey ${name}`);
};
greet(firsName);
const os = require('os');
const user = os.userInfo()
console.log(user);
console.log(`uptime is ${os.uptime()} seconds`);