const express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors');

const sendGrid = require('@sendgrid/mail');
sendGrid.setApiKey(process.env.API_KEY);
const app = express();
const port = process.env.PORT || 3030;
app.use(bodyParser.json());
app.use(cors());
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});

app.get('/api',(req,res,next) => {
    
    res.send('API Status Running working')
});
app.post('/api/email',(req,res,next) => {

    
    const msg = {
        to:'prashant.mistry1235@gmail.com',
        from:'prashant.mistry1235@gmail.com',
        subject:'Website Contact',
        text: req.body.email + req.body.message  
    }

    sendGrid.send(msg)
        .then(result =>{

            res.status(200).json({
                success:true
            })
        })
        .catch(err =>{
            console.log('error ',err.response.body);
            res.status(401).json({
                success: false
            })
        })
});
app.listen(port, '0.0.0.0');

