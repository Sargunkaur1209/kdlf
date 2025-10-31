import React from 'react'
import Khanda from "../assets/Khanda.webp";
import "../PAGES/Signup.css";


const Signup = () => {
        return (
          <div className = "HeroSignup">
            <div className = "MovingTextSin">
          <marquee><pre>ਸਬਰ        ਸੰਤੋਖ       ਸਹਿਜ      ਸੇਵਾ       ਸਿਮਰਨ</pre></marquee></div>
          <div className = "Signup_Img">
          <div className = "signup">
            <h1 className = "SinHeading">Welcome to KDLF</h1>
            <h2 className = "SinSubHeading">SignUp Here</h2><br/>
            <label htmlFor = "Username">Username:</label>
            <input className = "SinBox" type = "text" id = "Username" placeholder = "Enter Your Username" required/>
            <label  htmlFor = "Password">Password:</label>  
            <input className = "SinBox" type = "password" id = "Password" placeholder = "Set Your Password" required/><br/>
            <label htmlFor = "Dob">Date of Birth:</label>  
            <input className = "SinBox" type = "date" id = "Dob"/>
            <br/>
            <label htmlFor = "City">City:</label>  
            <input className = "SinBox" type = "text" id = "City" placeholder = "Ex: Ludhiana(Punjab)"/>
            <br/><br/>
            <button className = "SinButton" value = "Signup" >SignUp</button>
             </div>
            <img src = { Khanda } alt = "Khanda" className = "KhandaImg"/>
         </div>
          <div className = "SinMovingText2"><marquee direction = "Right"><pre>ਸਬਰ        ਸੰਤੋਖ       ਸਹਿਜ      ਸੇਵਾ       ਸਿਮਰਨ</pre></marquee></div>
    </div>
  )
}

export default Signup
