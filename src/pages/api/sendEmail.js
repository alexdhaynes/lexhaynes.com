const mailgun = require('mailgun-js')({
    apiKey: process.env.MAILGUN_API_KEY, 
    domain: process.env.MAILGUN_DOMAIN
});

const sendEmail = async (firstName, lastName, email, subject, message) => {
    const emailMsg = {
        from: `Lexhaynes.com Webform <form@lexhaynes.com>`,
        to: 'lex.haynes@gmail.com',
        subject: `Someone filled out the form on your portfolio website: ${subject}`,
        template: 'portfolio_webform',
        'h:X-Mailgun-Variables': JSON.stringify({
            firstName,
            lastName,
            email,
            subject,
            message
        })
    };
    
    const body = await mailgun.messages().send(emailMsg); 
}       
   

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, subject, message } = req.body;        
        // send email
        try {
            sendEmail(firstName, lastName, email, subject, message);
            //res.status(200).json({msg: "success"})
        } catch (err) {
           // res.status(400).json(err)
        }
    } 
}