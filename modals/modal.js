var mongo = require("mongoose")
var url = 'mongodb+srv://Rathil:cJe6U7k0m1qfR6AW@cluster0.fibw1dl.mongodb.net/express';
// var con  = mongo.connection
mongo.connect(url,()=>{console.log("connected database")});

var employeeSchemaa = new mongo.Schema({
    name:String,
    email:String,
    etype:String,
    hourlyrate:Number,
    totalhour:Number,
    total:Number,
    image:String
})

var employeeModel = mongo.model("Employee",employeeSchemaa)
 

module.exports = employeeModel