const sgMail = require("@sendgrid/mail");
require('dotenv').config;

const { SENDGRID_KEY } = process.env
sgMail.setApiKey(SENDGRID_KEY);

const sendEmail = async (data) => {
    const email = { ...data, from: "olga.ulyanchuk@pepsico.com" };
    
    await sgMail.send(email);
}

module.exports = sendEmail;


// const nodemailer = require("nodemailer");
// require("dotenv").config();
// 
// const {EMAIL_PASSWORD} = process.env;
// 
// const nodemailerConfig = {
    // host: "smtp.meta.ua",
    // port: 465,
    // secure: true,
    // auth: {
        // user: "ulyanchuk@meta.ua",
        // pass: EMAIL_PASSWORD
    // }
// }
// const transporter = nodemailer.createTransport(nodemailerConfig);
// 
// const email = {
    // to: "sidorka.olka@gmail.com",
    // from: "ulyanchuk@meta.ua",
    // subject: "Новая заявка с сайта",
    // html: `<p><strong>Email клиента:</strong> sidorka.olka@mail.ccom</p>
            // <p><strong>Телефон клиента:</strong> 8-067 555-55-55</p>`
// };
// 
// transporter.sendMail(email)
    // .then(()=> console.log("Email success send"))
    // .catch(error => console.log(error.message))
// 
// module.exports = email;
// 