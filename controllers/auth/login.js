const { BadRequest, NotFound } = require("http-errors");
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");
const { sendSuccessRes } = require('../../helpers');


const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }, "_id email password");
    // if (!user) {
        // throw new NotFound(`User not found`);
    // }
    // if (!user.comparePassword(password)) {
        // throw new BadRequest("Invalid password");
    // }
    if (!user || !user.comparePassword(password)) {
        throw new BadRequest("Invalid email or password");
    };
    const token = "fdgdfgdf.fggagaga.afsfafa";
    sendSuccessRes(res, { data: { token } }, 200);
}

module.exports = login;
