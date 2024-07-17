
const express = require('express');
const mongoose = require('mongoose');
// const bodyParser=require('body-parser')
const cors = require('cors');
const todoRoutes = require('./routes/todos')

const app = express();


app.use(cors());

app.use(express.json());

app.use('/todos',todoRoutes);


mongoose.connect(
    
)


app.listen(3000,()=>{
    console.log('running here on 3000')
})