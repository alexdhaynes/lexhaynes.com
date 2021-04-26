const mailgun = require('mailgun-js')({
    apiKey: process.env.MAILGUN_API_KEY, 
    domain: process.env.MAILGUN_DOMAIN
});

const sendEmail = async (name, email, subj, msg) => {
    const emailMsg = {
        from: `Lexhaynes Portfolio Webform <form@lexhaynes.com>`,
        to: 'lex.haynes@gmail.com',
        subject: `Someone filled out the form on your portfolio website: ${subj}`,
        template: 'portfolio_webform',
        'h:X-Mailgun-Variables': JSON.stringify({
            name: name,
            subject: subj,
            email: email,
            message: msg,
        })
    };
    
    const body = await mailgun.messages().send(emailMsg); 
}       
   

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subj, msg } = req.body;        
        // send email
        try {
            sendEmail(name, email, subj, msg);
            res.status(200).json({msg: "success"})
        } catch (err) {
            res.status(400).json(err)
        }
    } 
}