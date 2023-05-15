const jwt = require("jsonwebtoken");

require("dotenv").config();

//middlewares have 3 parameters -> req, res , next 
//next asks control to move to next inline controller / middleware for the given route


//authentication middleware
const auth = async(req,res,next)=>{

    try{

        //fetch token from the cookie sent with request

        const token = req.cookies.token;
        //try fetching token from req.header ->"Authorization " . replace("Bearer" , "")

        //if no token recieved 
        if(!token || token === undefined){
            return res.status(400).json({
                success:false,
                message:"Token missing"
            })
        }

        //fetch details out of token -> fetch out the payload of the token
        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET );

            //add the payload to the request object for access to further middlewares/controllers 
            req.user = payload;

        }catch(err){
            return res.status(400).json({
                success:false,
                message:"invalid token or Token expired , login again!"
            })
        };
        
        //all good 
        //proceed to next middleware/controller in route
        next();
    

    }catch(err){//error 
        res.status(500).json({
            success:false,
            message:"Authentication middleware failed",
        })
    }
}


module.exports = { auth }