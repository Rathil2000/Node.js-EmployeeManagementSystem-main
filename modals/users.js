var mongo = require("mongoose")
var url = 'mongodb+srv://Rathil:cJe6U7k0m1qfR6AW@cluster0.fibw1dl.mongodb.net/express';
// var con  = mongo.connection
mongo.connect(url,()=>{console.log("connected database")});

var userSchemaa = new mongo.Schema({
    userName: {
        type: String,
        required: true,
        unique: true // `email` must be unique
      },  
    email: {
        type: String,
        required: true,
        unique: true // `email` must be unique
      }, 
      password:{
        type: String,
        required: true,
      }   
})

var userModel = mongo.model("admin",userSchemaa)
 

module.exports = userModel