const { Conflict } = require("http-errors");

const { User } = require("../../models/index");

const signup = async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw new Conflict("Already signup")
        // res.status(409).json({
            // status: "error",
            // code: 409,
            // message: "Already signup"
        // });
        // return;
    }
    const result = await User.create(req.body);
    res.status(201).json({
        status: "success",
        code: 201,
        message: "Success singup"
    })
};

module.exports = signup;
