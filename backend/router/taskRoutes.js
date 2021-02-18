const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { Register,Question } = require("../model/registerModel");

router.get("/login",async (req, res) => {
	try {
		const { email,password, } = req.body;
		const user = await Register.findOne({ email });
		if (!user)
		  return res
			.status(400)
			.json({ msg: "This email number does not exist." });
  
		const userpin = await User.findOne({ pin });
		if (!userpin)
		  return res.status(400).json({ msg: " Incorrect password ." });
  
		const authToken = createActivationToken({
		  email,
		  password,
		});
  
		res.json({ msg: "Login success!", authToken: authToken });
	  } catch (err) {
		return res.status(500).json({ msg: err.message });
	  }
		 
})

router.post("/save", async(req, res) => {
	const { email, password } = req.body;

	const register = new Register({
		email,
		password,
	});
	await register
		.save()
        .then((data) => {
            console.log(data)
			res.send({ msg: "Register Success! " });
			// res.send(data);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.post("/saveQuestion", async(req, res) => {
	const { questions } = req.body;
	const question = new Question({
		questions
	});
  await	question
		.save()
        .then((data) => {
            console.log(data)
			res.send({ msg: " Success! " });
			// res.send(data);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get("/getQuestion", async (req, res) => {

	await Question.find({}).toArray(function (err, result) {
		if (err) throw err;
		res.send(result);

	})
});


router.post("/saveAnswer", async(req, res) => {
	const { questions, answer } = req.body;
	const userId = await Question.findOne({ questions }).select("_id");
	Question.findByIdAndUpdate(userId,answer)
	
  await	question
		.save()
        .then((data) => {
            console.log(data)
			res.send({ msg: " Success! ", accessToken: activation_token });
			
		})
		.catch((err) => {
			console.log(err);
		});
});




const createActivationToken = (payload) => {
	return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET);
};

module.exports = router;



// await Question.find()
// 		.then((data) => {
// 			res.send(data);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});