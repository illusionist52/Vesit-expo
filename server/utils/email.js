const nodemailer = require('nodemailer');

const sendEmail = async options => {
    // STEPS //
    
    // 1) Create a transporter: A service that will send the Email.
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    //2) Define the email options :
    const mailOptions = {
        from: 'Nilanchala Panda <nilanchalpanda2003@gmail.com',
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: `<h4>${options.name}</h4><br/><p>${options.message}</p>`
    }

    // 3) Actually send the Email : 
    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;