import React from 'react'
import Khanda from "../assets/Khanda.webp";
import "../PAGES/Login.css";

const Login = () => {
  return (
    <div className = "HeroLogin">
      <div className = "MovingText">
    <marquee><pre>ਸਬਰ        ਸੰਤੋਖ       ਸਹਿਜ      ਸੇਵਾ       ਸਿਮਰਨ</pre></marquee></div>
    <div className = "Login_Img">
    <div className = "login">
      <h1 className = "LogHeading">Welcome to KDLF</h1>
      <h2 className = "LogSubHeading">Login Here</h2><br/>
      <label className = "Username" htmlFor = "Username">Username:</label>
      <input className = "LoginBox" type = "text" id = "Username" placeholder = "Enter Your Username" required/>
      <label className = "Password" htmlFor = "Password">Password:</label>  
      <input className = "LoginBox" type = "password" id = "Password" placeholder = "Enter Your Password" required/><br/><br/>
      <button className = "LoginButton" value = "Login" >Login</button>
       </div>
      <img src = { Khanda } alt = "Khanda" className = "KhandaImg"/>
   </div>
    <div className = "MovingText2"><marquee direction = "Right"><pre>ਸਬਰ        ਸੰਤੋਖ       ਸਹਿਜ      ਸੇਵਾ       ਸਿਮਰਨ</pre></marquee></div>
    </div>
  )
}

export default Login
