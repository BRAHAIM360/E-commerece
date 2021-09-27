import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useCallback } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {useHistory} from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({
     height:"50px"
  }
  )}  


`;
const Wraper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({
    padding :"10px 0px"
  }
    )}  
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  
  ${mobile({  display:"none"})} 
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
 
  ${mobile({ width:"50px" })} 
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
 
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  ${mobile({ fontSize:"24px" })} 
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:"2", justfyContent:"center",padding:"0px 10px" })} 
 
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize:"12px",marginLeft: "5px" })} 
`;

function NavBar() {

  const history = useHistory();
  const carteAmount=useSelector(state=>state.cart.value.length);
  

  return (
    <Container>
      <Wraper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <Search  style={{color:"gray",fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={useCallback(() => history.push('/'), [history])}>BRAHIM </Logo>
        </Center>
        <Right>
          <MenuItems onClick={useCallback(() => history.push('/Register'), [history])} >Register</MenuItems>
          <MenuItems onClick={useCallback(() => history.push('/Login'), [history])}>Sign in</MenuItems>
          <MenuItems>
            <Badge badgeContent={carteAmount ? carteAmount : 0} color="primary" onClick={useCallback(() => history.push('/Cart'), [history])}>
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItems>
        </Right>
      </Wraper>
    </Container>
  );
}

export default NavBar;
