const nodemailer = require('nodemailer');

function Mailing(to) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        auth: {
            user: 'ojhasuraj832@gmail.com',
            pass: 'vindraofsmnettbi'
        },
        host: 'smtp.gmail.com'
    });
    let mailOptions = {
        from: 'ojhasuraj832@gmail.com',
        to: `${to}`,
        subject: "Registered successfully ✔",
        text: "sample mail?",
        html: "<b>you are registered successfully </b>",
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("Email Error : ", error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = Mailing;