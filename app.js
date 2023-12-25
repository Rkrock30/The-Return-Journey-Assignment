require('./model/db');
const express = require('express');
const routes = require('./route/index')
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/api', routes);
global.httpResponseHandlerError = require('./utils/httpresponsehandler').httpResponseHandlerError
global.httpResponseSuccessHandler = require('./utils/httpresponsehandler').httpResponseSuccessHandler
global.Joi=require('joi')
app.get('/',(req,res)=>{
    res.status(200).send("Welcome to the Product Management System")
})
app.all("*", (req, res) =>{
    res.status(404).send("You've tried reaching a route that doesn't exist.")}
    );



app.listen(4500, () => {
    console.log('Express server started at port : 4500');
});

module.exports=app;