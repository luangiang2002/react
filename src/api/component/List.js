import React, { useEffect, useState } from 'react'
import axioProduct from '../mockapi/user'
import { useNavigate } from 'react-router-dom';
function List() {
    const [listUser, setListUser] = useState([]);
    useEffect(() => {
        getAllUser()
    }, [])
    const getAllUser = async () => {
        const resp = await axioProduct.get('product');
        setListUser(resp.data)
    }
    const navigate = useNavigate()
    const handleEdit = (user) => {
        localStorage.setItem("id", user.id)
        localStorage.setItem("tensp", user.tensp)
        localStorage.setItem("gia", user.gia)
        localStorage.setItem("image", user.image)
        navigate("/update-product")
    }
    const handleDelete = async (id) => {
      
        await axioProduct.delete("product/" +id)
        getAllUser()
    }
    const elementUser = listUser.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.tensp}</td>
                <td>{item.gia}</td>
                <td>{item.image}</td>

                <td>
                    <button onClick={() => handleEdit(item)}>update</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>

            </tr>
        )
    })
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <table border={'1px'} width={'800px'} align={'center'} >
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Ảnh</th>
                    </tr>
                </thead>
                <tbody>
                    {elementUser}
                </tbody>
            </table>
        </div>
    )
}

export default List