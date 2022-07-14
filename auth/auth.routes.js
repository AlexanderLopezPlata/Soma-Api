const Users = require('./auth.controller');

module.exports = (router) => {
    router.post('/register', Users.createUser);
    router.post('/login', Users.loginUser);

    console.log("test backend 3");
}