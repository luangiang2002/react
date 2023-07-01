import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/register.css'
import axiosUser from '../api/mockapi/user'
import { useNavigate } from 'react-router-dom'
import isEmpty from 'validator/lib/isEmpty'

function Register() {
  const [username, setUserName] = useState('')
  const [password, setPassWord] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const navigate=useNavigate();
  const [validationMsg,setValidationMsg]=useState('')
  const validateAll=()=>{
    const msg={}
    if(isEmpty(username)){
        msg.username="Vui lòng nhập Email/Name"
    }
     else if(username.length >0 && username.length<=6){
      msg.username="Emai or Name phải hơn 6 kí tự"
    }
    if(isEmpty(password)){
        msg.password="Vui lòng nhập Password"
    }
    else if(password.length >0 && password.length<=6){
      msg.password="Emai or Name phải hơn 6 kí tự"
    }
    if(isEmpty(ConfirmPassword)){
      msg.ConfirmPassword="Vui lòng nhập Confim Password"
  }
  else if(ConfirmPassword!==password){
    msg.ConfirmPassword="Mật khẩu không trùng nhau"
  }
   
   
    setValidationMsg(msg)
    if(Object.keys(msg).length>0) return false
    return true
   
   }
  const CreateRigister=async()=>{
    const isValid=validateAll()
    if(!isValid) return
    await axiosUser.post('user',{username,password,ConfirmPassword})
    navigate('/login')
  }


  return (
    <div className='register'>
      <h1>WECOME!</h1>
      <input type='text' placeholder='Email or Username'  onChange={(e)=>setUserName(e.target.value)}></input>
      <span>{validationMsg.username}</span>
      <input type='password' placeholder='Password' onChange={(e)=>setPassWord(e.target.value)}></input>
      <span>{validationMsg.password}</span>
      <input type='password' placeholder='Confrim Password'onChange={(e)=>setConfirmPassword(e.target.value)} ></input>
      <span>{validationMsg.ConfirmPassword}</span>
      <p>Do you already have an account? <Link to={'/login'} >Login</Link></p>
      <input type='submit' value="Register" onClick={CreateRigister}></input>
    </div>
  )
}

export default Register