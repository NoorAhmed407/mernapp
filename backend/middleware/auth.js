const jwt = require('jsonwebtoken');


function auth(req, res,next){
    const token = req.header('x-auth-token');

    //Check For Token

    if(!token) res.status(401).json({"msg" : "No Authorization Denied"});

    //Verify Token
    const decoded = jwt.verify(token, 'ms_myjwtSecret')
}