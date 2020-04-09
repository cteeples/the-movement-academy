const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
    console.log(req.body)

    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li><b>Name</b>: ${req.body.firstName} ${req.body.lastName}</li>
            <li><b>Email</b>: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'christian.teeples@gmail.com',
                pass: '19 Justice League'
            },
            tls:{
                rejectUnauthorized: false
            }
        })

        let mailOptions = {
            from:'test@testaccount.com',
            to: 'christian.teeples@gmail.com',
            replyTo: 'test@testaccount.com',
            subject: 'New Message From TMA Website',
            test: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) =>{
            if (err) {
                return console.log(err)
            }

            console.log('Message sent: %s', info.message)
            console.log('Message URL %s', nodemailer.getTestMessageUrl(info))
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
