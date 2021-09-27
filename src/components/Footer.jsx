import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection:"column"})} 
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
${mobile({ display:"none"})} 

`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  cursor: pointer;
  margin-bottom: 4px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor:"#f5eeee"})} 

`;

const ContactItem=styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;



`
const Payement=styled.img`
  
`

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContianer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: white;
  background-color: ${(color) => color.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    background-color: gray;
    transform: all 0.6s ease;
    transform: scale(1.1);
  }
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>BRAHIM.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a
          fugiat vel obcaecati perspiciatis quas nobis consectetur ad nesciunt
          blanditiis voluptas quo inventore enim autem, soluta ex? Accusamus,
          facere dignissimos.
        </Desc>
        <SocialContianer>
          <SocialIcon color="#4267B2">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E1306C">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#1DA1F2">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#0077b5">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="black">
            <GitHub />
          </SocialIcon>
        </SocialContianer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title></Title>
        <ContactItem><Room style={{marginRight: "10px"}} /> Rue cité jamel numero 25 Oran Algérie</ContactItem>
        <ContactItem><Phone style={{marginRight: "10px"}}/> +213 556593093</ContactItem>
        <ContactItem><MailOutline style={{marginRight: "10px"}}/> brahim.real.360@hotmail.fr</ContactItem>
        <Payement src="https://i.ibb.co/Qfvn4z6/payement.png"/>
      </Right>
    </Container>
  );
}

export default Footer;
