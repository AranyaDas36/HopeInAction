import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;


export const AppContext = createContext();
export default function AppContextProvider( {children} ){

    const navigate = useNavigate();

    const [loader, setLoader] = useState(false);
    const [user, setUser] = useState(null);


    //check auth
    // const checkAuth = async()=>{
    //     setLoader(true);
    //     try{

    //         const res = await axios.post("http://localhost:4000/api/v1/check-auth");

    //         if(res.data.success === false){
    //             setUser(null);
    //         }else{
    //             setUser(res.data.data);
    //         }


    //     }catch(err){
    //         console.log("Error in checkAuth flow -> ", err);
    //     }finally{
    //         setLoader(false);
    //     }


    // };


    //login
    const login = async(email,password)=>{
        setLoader(true);

        try{

            const body = {
                email,
                password,
            }

            const res = await axios.post("http://localhost:4000/api/v1/login" , body);

            if(res.data.success === false){
                console.log("inside success false body-> ", res.response.data.success);
                toast.error(`${res.message}`);
                navigate("/login");
            }
            setUser(res.data.data);

            navigate("/");



        }catch(err){

            if(err.response.status===400){
                console.log("inside success false body-> ", err.response);
                // toast.error(`${err.response.message}`);
                navigate("/signup");
  
            }else{
                console.log("Error in login flow -> ", err);

            }
            
            

        }finally{
            setLoader(false);
        }
    };


    


    //logout
    const logout = async()=>{

        setLoader(true);

        try{

            const res = await axios.post("http://localhost:4000/api/v1/logout");
            if(res.data.success === false){
                toast.error(`${res.message}`);
                navigate("/");
            }

            setUser(null);
            navigate("/");

        }catch(err){
            console.log("Error in logut flow -> ", err);

        }finally{
            setLoader(false);
        }



    }



    //signup
    const signup = async( signupData ) =>{
        setLoader(true);

        try{
            const res = await axios.post("http://localhost:4000/api/v1/signup" , signupData);
            console.log("res.data from signup call ", res);
            if(res.data.success === false){
                toast.error(`${res.data.message}`);
            }

            toast.success("Signed Up!");
            navigate("/login");

        }catch(err){
            console.log("Error in signup flow -> ", err);

        }finally{
            setLoader(false);
        }

        
    };

    





    const values = {
        loader,
        setLoader,
        login,
        logout,
        signup,
        //checkAuth,
        user,
        setUser,
        
    }

    return <AppContext.Provider value={values}> {children} </AppContext.Provider>
}


