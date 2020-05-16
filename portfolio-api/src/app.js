const express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');
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
    sendGrid.setApiKey(process.env.API_KEY);
    const msg = {
        to:'shant1235@hotmail.com',
        from:'shant1235@hotmail.com',
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
app.listen(3030, '0.0.0.0');

