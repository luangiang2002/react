import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../asset/Pictures/trang-chu/logophongtra.png'
import styled from 'styled-components'

function Navbar({ontoggle}) {
    const [showList, setShowList] = useState(false)
    const handleClick=()=>{
        window.scrollTo(0, 0)
        setShowList(!showList)
    }
    
    const handleToggle=()=>{
        ontoggle(true)
    }
    return (
        <NavbarMenu onClick={handleToggle} >
            <div className='heading' >
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className='toggle' onClick={ handleClick}  >
                    <span className="bar"></span> 
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className=" navbar-main" id={showList ? "hidden" : ""} >
                    <ul>
                        <li>
                            <Link to={'/'}  onClick={ handleClick} >Trang chủ</Link>
                        </li>
                        <li>
                            <Link to={'/gioithieu'} onClick={ handleClick}>Giới thiệu</Link>
                        </li>
                        <li>
                            <Link to={'/sanpham'} onClick={ handleClick}>Sản phẩm</Link>
                        </li>
                        <li>
                            <Link to={'/tintuc'} onClick={ handleClick}>Tin tức</Link>
                        </li>
                        <li>
                            <Link to={'/lienhe'} onClick={ handleClick}>Liên hệ</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </NavbarMenu>

    )
}

export default Navbar;

const NavbarMenu = styled.div`

    width: 100vw;
    height: 100px;
    position: fixed;
    background: white;
    top: 0;
    z-index: 100;
   .heading{
    width: 80%;
    height: 100px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    font-family:SVN-Athena ;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
    font-size: 16px;

   }

        .navbar-main ul{
            display: flex;

            li{
            list-style: none;
            margin-left:3rem ;
            cursor: pointer;
            transition: all 0.3s ease-in;

            a{
                text-decoration: none;
                color: black;
                text-transform: uppercase;
                position: relative;

                &::after{
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 3px;
                    background-color: green;
                    left: 0;
                    bottom: 0;
                    transform: scaleX(0);
                    transition: all 0.3s ease-in;
                }
                &:hover::after{
                    transform: scale(1);
                }
            }

        }
            } 
        .toggle{
            position: absolute;
            right: 4rem;
            top:3rem;
            width: 40px;
            height: 21px;
            display: none;
            cursor: pointer;
            .bar{
                background-color: black;
                height: 3px;
                display: block;
                margin: 5px;
            }

        }

        @media (max-width: 800px){
            .heading{
                width: 100%;
            }
            #hidden{
                position: fixed;
                background: white;
                z-index: 10;
                transform: translateY(55%);
                display: flex;
                background-color: gray;
                width: 100vw;
                height: 100vh;
               

            }
           
            .navbar-main{
                display: none;
                

            }
            .navbar-main ul{
                flex-direction: column;
                display: flex;
                margin: auto;
            }
            .navbar-main ul li{
                font-size: 20px;
                margin-bottom: 20px;
            }
            .navbar-main.active{
                display: block;
            }
            .toggle{
                display: block;
                z-index: 99;

            }


        }




`;
