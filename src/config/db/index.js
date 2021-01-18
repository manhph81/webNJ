const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://admin:pN7aKAYO8rolidy9@cluster0.kn2tv.mongodb.net/test?authSource=admin&replicaSet=atlas-1370jf-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=truet', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect succesfully !!!')
    } catch (error) {
        console.log('Connect failure !!!')
    }
}

module.exports = {connect}
