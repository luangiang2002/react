import React, { useState } from 'react'
import axiosUser from '../mockapi/user'
import { useNavigate } from 'react-router-dom'


function Create() {
    const [tensp, setUserName] = useState('')
    const [gia, setGia] = useState('')
    const [anh, setAnh] = useState('')
    const navigate = useNavigate()

    const createProduct = async () => {
        await axiosUser.post('product', { tensp, gia, anh });
        navigate("/list-product")
    }

    return (
        <div>
            <h2>Thêm mới sản phẩm</h2>
            <table border={'1px'} width={'800px'} align='center'>
                <tr>
                    <td>Tên sản phẩm</td>
                    <td><input type='text' name='usename' onChange={(e) => setUserName(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Giá</td>
                    <td><input type='number' name='gia' onChange={(e) => setGia(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Ảnh</td>
                    <td><input type='text' name='file' onChange={(e) => setAnh(e.target.value)} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <div>
                            <button onClick={createProduct}>Create</button>
                        </div>
                    </td>
                </tr>

            </table>
        </div>
    )
}

export default Create