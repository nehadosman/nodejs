let UserModel = require("../Models/UsersModel");
let AddNewUser = async(req, res)=>{
    var newUserFromBody = req.body;
    var newUserModel = new UserModel(newUserFromBody);
    await newUserModel.save();
    await res.json(newUserModel)
}

module.exports = {AddNewUser};