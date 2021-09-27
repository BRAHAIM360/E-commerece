import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
import { mobile } from '../responsive';


const Container = styled.div`
  width: 100vw;
  height: 87vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5), 
    rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/7195232/pexels-photo-7195232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
    center;
    background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Wrapper = styled.div`
padding: 25px;
width: 20%;
background-color: rgba(255, 255, 255, .5);
${mobile({width:"70%"})} 

`;
const Title = styled.h1`
font-style: 24px;
font-weight: 300;
`;
const Form = styled.form`
display: flex;
flex-direction: column;

`;
const Input = styled.input`
flex:1;
min-width: 40%;
padding: 10px;
margin: 10px 0px;
`;
const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
margin-bottom: 10px;
`;


const Button = styled.button`
width:40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin: 20px;

&:hover{
    background-color: Green;
    transform: all 2s ease;
    transform: scale(1.1);
    border-radius: 10px;
}
`;

function Login() {
    return ( 
      <>
      <NavBar />
      <Announcement />
    <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username or email" />
            <Input placeholder="password" />

            <Button>LOGIN</Button>
       
            <Link>FORGET YOUR PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container> 
      
      </>
    )
}


export default Login
