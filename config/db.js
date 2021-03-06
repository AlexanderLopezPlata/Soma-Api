const mongoose = require('mongoose');
const dbURL = require('./properties').DB;

module.exports = () => {
    mongoose.connect(dbURL, {useNewUrlParser: true})
    .then(()=> console.log(`Mongo connected on ${dbURL}`))
    .catch(err => console.log(`Connection has error ${err}`))

    process.on('SIGINT', ()=> {
        mongoose.Connection.close (()=> {
            console.log(`Mongo is disconected`);
            process.exit(0);
        });
    });
}