const User = require("../models/user");
require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//signup function
const signup = async(req,res)=>{


    try{
        //fetching data from request body
        const {name,email,phone,password,donor} = req.body;

        //if any field is missing in the req body
        if(!name || !email || !password || !phone){
            return res.status(400).json({
                success:false,
                message:"Bad request , missing fields in body",
            })
        }

        //validate if already registered or not *imp as no duplicate email ids should be
        
        //hash incoming original (unhashed) password
        const hashedPassword = await bcrypt.hash(password,10);
 
        //object to be pushed
        const newUser = await User.create({
            name,
            email,
            password:hashedPassword,
            donor,
            phone,
        })

        //response
        res.status(200).json({
            success:true,
            data:newUser,
            message:"New user created Successfully",
        })




    }catch(err){

        console.log("error in signup flow -> ",err);

        res.status(500).json({
            success:false,
            message:"Error occurred in signup flow",
        })

    }


};


//login function
const login = async(req,res)=>{


    try{

        //fetch email & password from req body
        const {email,password} = req.body;

        //validation for missing fields
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Bad request , missing fields",
            })
        }

        //fetch user db object by email
        const user  = await User.findOne({email:email});

        //if no object found , email is not registered
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User with given credentials not found",
            })
        }

        //user exists 

        //compare input password with db entry(user obj) encrypted hashed password
        if(await bcrypt.compare(password,user.password)){

            //password matches


            //construct payload for jwt token
            const payload = {
                name: user.name,
                email : user.email,
                userId : user._id,
                userDonor: user.donor,
            }

            //create jwt token ( payload + secret + option)
            const token = jwt.sign(payload , process.env.JWT_SECRET , {//options    
                expiresIn:"2h",
            })




            //construct options for cookies
            const options = {
                expires: new Date( Date.now() + 1 * 1 * 60 * 60 * 1000),
                httpOnly:true,
            }

            //remove password field from current iteration use robject which would be sent in response  
            user.password = null;
            // user.toObject()
            // user.token = token

            //response
            //send a cookie in which the jwt token will be there and send user obj as data in json
            return res.cookie("token",token , options).status(200).json({
                success:true,
                data:user,
                message:"Logged In!"
            })


        }else{
            return res.status(400).json({
                success:false,
                message:"User with given credentials not found",
            })
        }



        

    }catch(err){
        console.log("error in login flow->", err);
        res.status(500).json({
            success:false,
            message:"Failed , try again later"
        })
    }


};


//logut
const logout = async (req,res)=>{

    try{
        //user coming in is already authenticated

        res.clearCookie('token', { httpOnly: true }).status(200).json({
            success:true,
            message:"Logged Out!",
        });

        
    }catch(err){
        console.log("Error in logout flow -> ", err);
        res.status(500).json({
            success:false,
            message:"Something went wrong!, try again",
        })

    }
};

const checkAuth = async(req,res)=>{

    try{

        const payload = req.user;
        // console.log("payload-> ", payload);

        res.status(200).json({
            success:true,
            data:payload,
            message:"Authenticated user",
        })

    }catch(err){
        console.log("Error in check auth flow -> " , err);
        res.status(500).json({
            success:false,
            message:"Something went wrong!",
        })

    }
} 


module.exports = {
    signup,
    login,
    logout,
    checkAuth,
};