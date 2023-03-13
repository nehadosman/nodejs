const mongoose = require("mongoose");
var DB_URL = "mongodb://localhost:27017/Users";

//(1)Connect ---> (3)Listen mongoose.connection.once("open",()=>{}) --> model.find({}).exec()
mongoose.connect(DB_URL,{useNewUrlParser:true});

let UsersSchema = new mongoose.Schema({
    name:{type:String, required:true, minlength:3},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

module.exports = mongoose.model("auths", UsersSchema);


