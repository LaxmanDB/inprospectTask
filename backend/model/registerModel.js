const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
 
  email: String,
  password: String,
 
});
const QuestionScema = new mongoose.Schema({
 
  question: String,
  answer: Object,
 
});

const Register = mongoose.model("register", RegisterSchema);

const Question = mongoose.model("question", QuestionScema);


module.exports = { Register ,Question};