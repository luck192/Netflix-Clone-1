import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import netflix_spinner from '../../assets/netflix_spinner.gif'
import {toast} from 'react-toastify'
import { useEffect } from 'react'

const Login = () => {
  const[currState , setcurrState] = useState('signup');
  const[username, setusername] = useState('');
  const[email, setemail] = useState('');
  const[password, setpassword] = useState('');
  const[loading, setloading]=useState(false);
  const navigate = useNavigate();
  
  useEffect(()=>{
  localStorage.removeItem("token");
  },[])

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setloading(true);
    try{ 
      const response = await fetch(`https://netflix-clone-1-backend.onrender.com/api/${currState}`,{
        method:'POST',
        headers:{
          'content-type':'application/json',
        },
        body:JSON.stringify({username,email,password}),
      })

      if(currState === "signup"){

         if(response.ok){
          setcurrState('signin');
          toast.success("Acount registered Sucesfuly, you can sign-in now");
         }else{
            toast.error("user alrdy exists");
         }
      }
      else{
          if(response.ok){
           localStorage.setItem("token", "true"); 
           navigate('/home');
         }
         else{
            toast.error("Invalid credentials");
         }
      }
    }
    catch(e){
      console.log("error is sending data to backend", e.message);
    }finally{
      setloading(false);
    }
  }
  return (
    loading?<div className="loadingdiv">
       <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{currState === "signup" ? "Sign up":"Sign in"}</h1>
      <form className='form-input' id='11' name='formsi' onSubmit={handleSubmit}>

         {currState === "signup" ? <input onChange={(e)=>{setusername(e.target.value)}} type="text" placeholder='Your name' />:<></>} 

          <input  onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder='Your Email' />

          <input  onChange={(e)=>{setpassword(e.target.value)}} type="text" placeholder='Your Password' />

          <button  >{currState === "signup" ? "Sign up":"sign in"}</button>
          <div className="form-help">
            <div className="remeber">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>

      </form>
        <div className="form-switch">
          {currState === "signup" ? <p > Already have Account? <span onClick={(e)=>{setcurrState('signin')}}>Sign in</span></p>: <p>New to Netflix? <span  onClick={(e)=>{setcurrState('signup')}}>Sign up</span></p> }
        </div>
     
      </div>
    </div>
  )
}

export default Login
