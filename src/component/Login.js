import React, { useEffect, useState } from 'react'
import '../css/login.css'
import { Link } from 'react-router-dom'
import axiosUser from '../api/mockapi/user'
import { useNavigate } from 'react-router-dom'
import isEmpty from 'validator/lib/isEmpty'
function Login({ ontoggle }) {
    const [listUser, setListUsers] = useState([]);
    const [username, setUserName] = useState('');
    const [password, setPassWord] = useState('');
    const [validationMsg, setValidationMsg] = useState('')
    useEffect(() => {
        getAllUsers();
    }, [])
    const getAllUsers = async () => {
        const resp = await axiosUser.get("user");
        setListUsers(resp.data)
    }
    const navigator = useNavigate()
    const validateAll = () => {
        const msg = {}
        if (isEmpty(username)) {
            msg.username = "Vui lòng nhập Email/Name"
        }
        if (isEmpty(password)) {
            msg.password = "Vui lòng nhập Password"
        }
        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) return false
        return true
    }
    const handleSubmit = (e) => {
        const isValid = validateAll()
        if (!isValid) return
        listUser.map((item, index) => {
            if (item.username === username && item.password === password)
            ontoggle(false)
            return navigator("/")
        })
    }
    const handleTongle=()=>{
        ontoggle(true)
    }
    return (
        <div className='login'>
            <div className='login-lg'>
                <h1>LOGIN</h1>
                <p>Vui lòng đăng nhập để mua hàng</p>
                <input type='text' placeholder='Email/Name' onChange={(e) => setUserName(e.target.value)}></input>
                <span>{validationMsg.username}</span>
                <input type='password' placeholder='Password' onChange={(e) => setPassWord(e.target.value)}></input>
                <span>{validationMsg.password}</span>
                <input type='submit' value="LOGIN" onClick={handleSubmit}></input>
                <p>Don't have an account ? <Link to={'/register'}>Sign Up</Link></p>
                <p>Bỏ qua trở về <Link to={'/'} onClick={handleTongle}>Trang chủ</Link></p>
            </div>
        </div>
    )
}

export default Login