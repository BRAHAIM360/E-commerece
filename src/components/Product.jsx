import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { addToCart } from "../Redux/features/cartSlice";



const Info = styled.div`
opacity: 0;
width:100%;
height:100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);
z-index:3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;


const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content:center;
background-color: #f5fbfd;
position: relative;
border-radius: 5%;
&:hover ${Info}{
   
    opacity :1 ;
}
`;
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
position: absolute;
`;
const Image = styled.img`
height:75%;
z-index: 2;
`;
const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
margin: 5px;
transition: all 0.2s ease;
&:hover{
    background-color: #e9f5f5 ;
    transform: scale(1.2);
}


`;

function Product(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const onClickAddIteme=(item)=>{ 
   dispatch(addToCart(item));

  }
  return (
    <Container>
      <Circle />
      <Image src={props.item.img}></Image>
      <Info>
        <Icon  onClick={()=>{onClickAddIteme(props.item)}} >
          <ShoppingCartOutlined />
        </Icon>
        <Icon onClick={useCallback(() => history.push('/Product'), [history])}>
          <SearchOutlined />
        </Icon>
        <Icon onClick={useCallback(() => history.push('/Product'), [history])}>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;
