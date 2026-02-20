/**
 * server ko start krna
 * database se connect krna
 */
require('dotenv').config()
const app = require('./src/app');
const connectToDatabase = require('./src/config/database');



/*
Server start
*/
connectToDatabase()
app.listen(3000,()=>{
    console.log("Server is runing on port 3000");
    
})
