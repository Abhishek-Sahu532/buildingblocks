const mongoose = require('mongoose')


const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI).then(()=>{console.log('Connected to the database')}).catch((e)=>{console.log(`Error in database connectivity, ${e}`)})
}


module.exports = connectDatabase