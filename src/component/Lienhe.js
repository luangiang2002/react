import React, { useState } from 'react'
import '../css/lienhe.css'
import { useNavigate } from 'react-router-dom';
import isEmpty from 'validator/lib/isEmpty'

function Lienhe() {
  const navigater = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [text, setText] = useState('')
  const [validationMsg,setValidationMsg]=useState('')
  const validateAll=()=>{
    const msg={}
    if(isEmpty(username)){
        msg.username="Vui lòng nhập Name"
        console.log(username);
    }
     else if(username.length >0 && username.length<=6){
      msg.username="Name phải hơn 6 kí tự"
    }
    if(isEmpty(email)){
        msg.email="Vui lòng nhập Email"
    }
    else if(email.length >0 && email.length<=6){
      msg.email="Email phải hơn 6 kí tự"
    }
    if(isEmpty(tel)){
      msg.tel="Vui lòng nhập Tel"
  }
  else if(tel.length >0 && tel.length<=6){
    msg.tel="Tel phải hơn 6 kí tự"
  } 
  if(isEmpty(text)){
    msg.text="Vui lòng nhập nội dung"
}
else if(text.length >0 && text.length<=6){
  msg.text="nội dung phải hơn 6 kí tự"
}
    setValidationMsg(msg)
    if(Object.keys(msg).length>0) return false
    return true

   }
  const handleSubmit = () => {
    // window.scroll(0, 0);
    const isValid=validateAll()
    if(!isValid) return
    navigater('/');
  }
 
  return (
    <div className='contact'>
      <div className="main">
        <img src="Pictures/lien-he/banner.jpg" alt="" />
        <div className="hotline">
          <h1>Liên hệ với chúng tôi</h1>
          <input type="text" placeholder="Họ tên" onChange={(e) => setUsername(e.target.value)} />
          <span>{validationMsg.username}</span> <br />
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <span>{validationMsg.email}</span>
          <br />
          <input type="tel" placeholder="Số điện thoại" onChange={(e) => setTel(e.target.value)} />
          <span>{validationMsg.tel}</span>
          <br />
          <input type="text" placeholder="Nội dung" onChange={(e) => setText(e.target.value)} />
          <span>{validationMsg.text}</span>
          <br />
          <input type="submit" value="Gửi" onClick={handleSubmit} />

        </div>
      </div>
    </div>
  )
}

export default Lienhe