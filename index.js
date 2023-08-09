const express = require('express')
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require('body-parser')

const app = express()
const port = 3000
app.use(cors())
const corsOptions = {
    origin: 'https://back-for-portfolio.vercel.app/',
    optionsSuccessStatus: 200
}

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

app.post('/sendMessage', cors(corsOptions), async (req, res) => {
    console.log(req)
    console.log(res)
    const {name, phone, email, message} = req.body
    const info = await transporter.sendMail({
        from: 'HR WANTS ME',
        to: "Vlad",
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
    res.send('blablabla')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})