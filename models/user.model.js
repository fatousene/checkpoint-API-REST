const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
//Defining our schema
const userSchema = new Schema({
    name: {
        type:String,
        required:true
          },
    e_mail: {
        type:String,
        required:true
            }  
})
// create model
const User = mongoose.model('User',userSchema)
module.exports = User;