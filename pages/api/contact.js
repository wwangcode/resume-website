import nodemailer from 'nodemailer'


export default async (req, res) => {
    const { name, email, subject, message } = req.body
    const recipientEmail = process.env.NODEMAILER_USER

    if (email === '' || name === '' || subject === '' || recipientEmail === '') {
        return res.status(403).send('')
    }

    const mailerRes = await mailer({ email, name, subject, text: message, recipientEmail })
    res.send(mailerRes)
    // TODO: add error checking here ie try catch block
}


const mailer = ({ email, name, subject, text, recipientEmail }) => {
    const from = name && email ? `${name} <${email}>` : `${email || name }`
    const message = {
        from,
        to: `${recipientEmail}`,
        subject,
        text,
        replyTo: from
    }
    // return message
    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
    }
})