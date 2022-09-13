const jwt = require('jsonwebtoken');
const tokenCheck = (req,res,next)=>{
    const {authorization} = req.headers;
    try{
        const token = authorization.split(' ')[1];
        const finalToken = token.split('"')[0];
        console.log(finalToken);
        // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTQyY2IwY2UwN2YyYjkwYWIxOWEzZSIsImVtYWlsIjoicGF0aWVudEBwYXRpZW50LmNvbSIsInJvbGUiOiJwYXRpZW50IiwiaWF0IjoxNjYzMDUyNjM5fQ.Fa3itQ1t6eEVewl8AnEf0ovIPRXwAARqantjzNnKeBs
        const decode = jwt.verify(finalToken,process.env.JWT_TOKEN);

        const {id,email,role} = decode;
        req.id = id;
        req.email = email;
        req.role = role;
        next();
    }
    catch{
        next("Authentication Failed");
    }
}

module.exports = tokenCheck;