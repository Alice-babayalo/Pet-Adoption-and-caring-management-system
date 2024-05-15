import nodemailer from 'nodemailer';

export const sendEmail = (recipient, subject, body) => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE||"gmail",
        auth: {
            user: process.env.EMAIL_USER||"umuhozawasealice@gmail.com",
            pass: process.env.EMAIL_PASSWORD||"arqe qkkc jcgs orsc"
        }
    });

    const mailOptions = {
        from: '"LissaVette" <umuhozawasealice@gmail.com>',
        to: recipient,
        subject: subject,
        text: body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};