const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid email");
      }
    },
  },
  mobile: {
    type: String,
    required: true,
  },
  messages: [],
});




//save message 
userSchema.methods.Messagesave = async function (message) {
    try{
this.messages = this.messages.concat({message});
await this.save();
     return message;
    } catch (error) {
        console.log(error)
    }
}


const users = new mongoose.model("users", userSchema);

module.exports = users;




// [].concat({message});

// // op=> [{message:"repo.akjsdf"}]