const express = require('express')
const cors = require('cors')
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser')

const app = express()
const port = 3010

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vladmalevich1431@gmail.com',
        pass: 'oaumvjsqlccongxf'
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/sendMessage', async (req, res) => {
    const {name, phone, email, message} = req.body
    const info = await transporter.sendMail({
        from: 'HR WANTS ME',
        to: "vladmalevich1431@gmail.com",
        subject: "HR WANTS ME",
        html: `<b>Сообщение с вашего портфолио:</b>
<div>
name: ${name}
</div>
<div>
phone: ${phone}
</div>
<div>
email: ${email}
</div>
<div>
message: ${message}
</div>
`
    });
    res.send('ok')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})