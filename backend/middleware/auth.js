const jwt = require('jsonwebtoken');


function auth(req, res,next){
    const token = req.header('x-auth-token');

    //Check For Token

    if(!token) res.status(401).json({"msg" : "No Authorization Denied"});

    try{
        //Verify Token
        const decoded = jwt.verify(token, 'ms_myjwtSecret');
    
        //Add user from payload
        req.user = decoded;
        next();

    }catch(e){
        res.status(400).json({"msg": "Token is Not Valid"})
    }

}


module.exports= auth;