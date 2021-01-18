const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://manh:admin@cluster0.kn2tv.mongodb.net/test', {
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
