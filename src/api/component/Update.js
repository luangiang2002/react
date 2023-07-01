import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosUser from '../mockapi/user'

function Update() {
    const [id, setId] = useState("")
    const [tensp, setUserName] = useState('')
    const [gia, setGia] = useState('')
    const [image, setAnh] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setUserName(localStorage.getItem('tensp'))
        setGia(localStorage.getItem('gia'))
        setAnh(localStorage.getItem('image'))
    },[])
    const UpdateProduct=async()=>{
        await axiosUser.put('product/'+id,{id,tensp,gia,image})
        navigate('/list-product')
    }
    return (
        <div>
            <h2>Cập nhật sản phẩm</h2>
            <table border={'1px'} width={'800px'} align='center'>
               <tbody>
               <tr>
                    <td>Id</td>
                    <td><input type='text' name='id' 
                    value={id}
                    onChange={(e) => setId(e.target.value)} />
                    
                    </td>
                </tr>
               <tr>
                    <td>Tên sản phẩm</td>
                    <td><input type='text' name='tensp'
                    value={tensp}
                    onChange={(e) => setUserName(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Giá</td>
                    <td><input type='number' name='gia'
                    value={gia} 
                    onChange={(e) => setGia(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Ảnh</td>
                    <td><input type='text' name='image'
                   value={image} 
                   onChange={(e) => setAnh(e.target.value)} 
                     /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <div>
                            <button onClick={UpdateProduct}>Create</button>
                        </div>
                    </td>
                </tr>
               </tbody>

            </table>
        </div>
    )
}

export default Update