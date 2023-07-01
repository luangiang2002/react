import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
        <ul>
            <li>
                <Link to={'/list-product'}>List-Product</Link>
            </li>
            <li>
                <Link to={'/create-product'}> Craete Product</Link>
            </li>
            <li>
                <Link to={'/update-product'}>Update Product</Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu