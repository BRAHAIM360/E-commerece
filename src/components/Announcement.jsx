import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Contaiener = styled.div`
  height: 35px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: bold;
  ${mobile({  fontSize: "15px",height: "30px"})} 
`;
function Announcement() {
  return <Contaiener>Supper Deal! free Shiping on Orders Over $50</Contaiener>;
}

export default Announcement;
