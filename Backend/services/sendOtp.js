const nodemailer = require('nodemailer');

function sendOtp(to, otp) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        auth: {
            user: 'ojhasuraj832@gmail.com',
            pass: 'kcghuxszxncglvbj'
        },
        host: 'smtp.gmail.com'
    });
    var mailOptions = {
        from: 'ojhasuraj832@gmail.com',
        to: `${to}`,
        subject: "OTP verification ✔",
        text: "OTP",
        html: `<b>your verification otp  ${otp} </b>`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("Email Error : ", error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendOtp;