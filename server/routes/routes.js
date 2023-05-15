const express = require("express");

const router = express.Router();

//importing controller functions
const {signup,login,logout, checkAuth} = require("../controllers/authN");
const {auth} = require("../middlewares/authZ");


//login & singup routes
router.post("/signup",signup);
router.post("/login",login);

//logout 
router.post("/logout" ,auth, logout);

//checkauth
router.post("/check-auth" , auth , checkAuth);


//exporting
module.exports = router;