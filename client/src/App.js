import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Stories from "./pages/Stories";
import ContactUs from "./pages/ContactUs";
import Vision from "./pages/Vision";

import "./pages/styles.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";




function App() {


  return (
    
    <div className="App">

      <Navbar></Navbar>

      <div className="page-container">

        <Routes>

          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/vision" element={<Vision></Vision>}></Route>
          <Route path="/stories" element={<Stories></Stories>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>

          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          

        </Routes>
        
      </div>
     

      <Footer></Footer>
        


    </div>
    
  );
}

export default App;
