const express = require('express');
const mongoose = require('mongoose');
const { Expense } = require('./schema.js')

const app = express();
async function connectToDb(){
    try{
    await mongoose.connect('mongodb+srv://Jasmitha17:17052005@cluster0.j3xkf15.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('DB connection established')
const port = 8000;
app.listen(port, function() {
    console.log(listening on port ${port}...);
})
}
catch(error){
    console.log('error')
    console.log('Couldn\'t establish connection:')
}
}
connectToDb()