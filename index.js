const express = require('express')
const app = express()
const bodyParser=require('body-parser')
  

app.use(bodyParser.json());

const mongoose = require('mongoose')

const route=require('./routes')
app.use('/api/v1',route)







mongoose.connect('mongodb+srv://Anjana:user123@cluster0.i3zk1.mongodb.net/userprofile', {
    useNewUrlParser: true,
    useUnifiedTopology:true
},()=>console.log('connected to DB'))

// mongoose.connection.on('error', function () {
//     console.log("An error occured");

// })
// mongoose.connection.once('open', () => {
//     console.log("DB connection established");

// })
//routes




app.listen(5000, function () {
    console.log("Listning at port 5000");
})






