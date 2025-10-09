import React from 'react'
import notFountImg from "../assets/notfound.jpg"
import styled from 'styled-components'
import { useNavigate } from 'react-router'



const ImgStyle = styled.div`
margin : 0;
padding : 0;
width : 100%;
height : 100vh;
`

const NotFound = () => {


    const navigate = useNavigate()

    setTimeout(() => {
        navigate("/")
    },3000)

  return (
    <ImgStyle>
        <img src={notFountImg} alt="" width={"100%"} height={"100%"}/>
    </ImgStyle>
  )
}

export default NotFound