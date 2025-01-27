const express = require('express');
const app = express();
const PORT = 3010;
app.listen(PORT,()=>console.log(`Server is started at PORT:${PORT}`));

app.get('/user/signup',(req,res)={
    
})


const username = req.body.username;
const password = req.body.password;
const email = req.body.email;

if(username==0){
    let obj = {
        Message :"Username cannot be empty"
    };
    return obj
};

if (password.length < 8){
    let obj = {
        Message : "Password should be greater than 8 characters"
    };
    return obj
} else if (password.length > 16){
    let obj = {
        Message : "Password should be less than 16 characters"
    };
    return obj
};

if(email=="") {
    let obj = {
        Message : "Email cannot be empty"
    };
    return obj
};